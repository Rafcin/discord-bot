import {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ChannelType,
  Events,
  type Interaction,
  type Message,
  type StartThreadOptions,
  type ThreadChannel,
  type Guild,
  User,
} from 'discord.js'
import { prisma } from '$lib/db'
import {
  commands,
  createCommandFeatures,
  syncRegisteredCommandsForGuild,
} from './commands'
import { PREFIXES } from './commands/thread'
import { isHelpChannel, isThreadWithinHelpChannel } from './support'
import { integrations } from '$lib/features/index'
import { FEATURE_TYPES } from '$lib/constants'
import { Configuration, OpenAIApi } from 'openai'

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
})

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const initGuild = async (guild: Guild) => {
  return prisma.guild.upsert({
    where: {
      id: guild.id,
    },
    create: {
      id: guild.id,
      configuration: {
        create: {
          name: guild.name,
          // initialize guild with all features disabled (commands, integrations, etc.)
          features: {
            connectOrCreate: [
              ...integrations,
              ...createCommandFeatures().map((c) => ({
                ...c,
                type: FEATURE_TYPES.COMMAND,
              })),
            ].map((f) => ({
              where: {
                configurationId_featureCode: {
                  configurationId: guild.id,
                  featureCode: f.code,
                },
              },
              create: {
                enabled: false,
                feature: {
                  connect: {
                    code: f.code,
                  },
                },
              },
            })),
          },
        },
      },
    },
    update: {
      configuration: {
        update: {
          name: guild.name,
        },
      },
    },
  })
}

client.once(Events.ClientReady, async () => {
  console.log('Bot Ready!')
  if (import.meta.env.DEV) {
    // delete all global commands
    await client.application?.commands.set([])
  }
  for (const guild of client.guilds.cache.values()) {
    try {
      await initGuild(guild)
      await syncRegisteredCommandsForGuild(guild.id)
    } catch (error) {
      console.error('Error upserting guild', error)
    }
  }
})

/**
 * Create Guild model when bot joins a new guild
 */
client.on(Events.GuildCreate, async (guild: Guild) => {
  try {
    await initGuild(guild)
    await syncRegisteredCommandsForGuild(guild.id)
  } catch (error) {
    console.error('Error upserting guild', error)
  }
})

client.on(Events.MessageUpdate, async (oldMessage, newMessage) => {
  if (oldMessage.author?.bot) return
  if (oldMessage.content === newMessage.content || !newMessage.content) return
  if (oldMessage.channel.type !== ChannelType.PublicThread) return

  // ensure message is within a help channel thread
  if (isThreadWithinHelpChannel(oldMessage.channel)) {
    // update answer contents if exists
    try {
      const answer = await prisma.answer.update({
        where: {
          id: oldMessage.id,
        },
        data: {
          content: newMessage.content,
        },
        select: {
          id: true,
        },
      })
      console.log('Updated answer content:', answer.id)
    } catch (error) {
      console.error(`Error updating answer (${oldMessage.id}) content:`, error)
    }
  }
})

client.on(Events.MessageCreate, async (message: Message) => {
  /**
   * Automatically create a thread when new messages are posted to "help" channels
   */
  if (
    !message.author.bot &&
    message.channel.type === ChannelType.GuildText &&
    isHelpChannel(message.channel)
  ) {
    const options: StartThreadOptions = {
      name: `${PREFIXES.open}${message.content.slice(0, 90)}...`,
      autoArchiveDuration: 60,
    }
    const thread: ThreadChannel = await message.startThread(options)

    // create Question in db
    try {
      const record = await prisma.question.create({
        data: {
          ownerId: message.author.id,
          threadId: thread.id,
          channelName: message.channel.name,
          title: message.content,
          createdAt: thread.createdAt as Date,
          url: message.url,
          guild: {
            connect: {
              id: message.guild?.id,
            },
          },
        },
      })
      console.info(`Created question ${record.id}`)
    } catch (error) {
      console.error('Unable to create Question in db', error)
    }

    // optionally send a message to the thread
    const infoEmbed = new EmbedBuilder()
    infoEmbed.setColor('#ff9900')
    // TODO: add more info on /thread command
    infoEmbed.setDescription(
      "Hey there! :wave: we've created a thread for you!\n\nUse `/thread rename` to change the title.\n\nUse `/thread solved` to mark this thread as solved."
    )
    thread.send({ embeds: [infoEmbed] })

    /**
     * When the user asks a question, generate a response using GPT-3 and then track if the user reacts positively or negatively to the response by using
     * the thumbs up and thumbs down reactions.
     */

    try {
      const recommendationEmojis = ['👍', '👎'] //the emojis to react
      const filter = (reaction: { emoji: { name: string } }, user: User) => {
        return (
          ['👍', '👎'].includes(reaction.emoji.name) &&
          user.id === message.author.id
        )
      }
      const response = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: `Question: ${message.content}; ?\nAnswer:`,
        temperature: 0.723631,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0.03,
        presence_penalty: 0.03,
        stop: ['Answer:'],
      })
      const recommendationEmbed = new EmbedBuilder()
      recommendationEmbed.setColor('#5865f2')
      recommendationEmbed.setDescription(
        `:man_mage::magic_wand: Here is a quick recommendation we think will solve your issue:\n ${response.data.choices[0].text} \n Let us know if this works!`
      )
      //Take the array of reactions and react to the thread.
      thread
        .send({ embeds: [recommendationEmbed] })
        .then(async function (message: Message) {
          for (const emoji of recommendationEmojis) {
            await message.react(emoji)
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const _reaction of recommendationEmojis) {
            await message
              // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
              //@ts-ignore
              .awaitReactions({ filter, max: 1, time: 60000 })
              .then((collected) => {
                const reaction = collected.first()
                if (reaction && reaction.emoji.name === '👍') {
                  message.reply(
                    "Awesome! Since this solved your issue let's go ahead and close this thread!"
                  )
                } else if (reaction && reaction.emoji.name === '👎') {
                  message.reply(
                    "I'm sorry we could not provider a better answer."
                  )
                }
              })
              .catch((collected) => {
                console.error('Collection error', collected)
              })
          }
        })
      //Track the reactions
    } catch (error) {
      console.error('Error suggesting solution', error)
    }
  }

  // capture thread updates in public "help" channels
  if (
    message.channel.type === ChannelType.PublicThread &&
    !message.author.bot &&
    isThreadWithinHelpChannel(message.channel)
  ) {
    let record
    try {
      /**
       * @TODO if we need to backfill the question, we'll need to fetch all messages from the thread first
       */
      record = await prisma.question.upsert({
        where: { threadId: message.channel.id },
        update: {
          threadMetaUpdatedAt: message.createdAt as Date,
        },
        create: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
          //@ts-ignore
          ownerId: (
            await message.channel.fetchStarterMessage()
          ).author.id as string,
          threadId: message.channel.id,
          channelName: message.channel.parent!.name,
          title: message.channel.name,
          createdAt: message.channel.createdAt as Date,
          url: message.url,
          isSolved: message.channel.name.startsWith(PREFIXES.solved),
          guild: {
            connect: {
              id: message.guild?.id,
            },
          },
        },
        select: {
          id: true,
          ownerId: true,
        },
      })
      console.info(`Created/updated question ${record.id}`)
    } catch (error) {
      console.error('Unable to create/update Question in db', error)
    }

    try {
      /**
       * add the participants separately
       */
      if (record) {
        const roleIds = message.member?.roles.cache.map((role) => role.id)
        await prisma.question.update({
          where: {
            id: record.id,
          },
          data: {
            // participation record
            participation: {
              connectOrCreate: {
                where: {
                  questionId_participantId: {
                    questionId: record.id,
                    participantId: message.author.id,
                  },
                },
                create: {
                  // DiscordUser
                  participant: {
                    connectOrCreate: {
                      where: { id: message.author.id },
                      create: {
                        id: message.author.id,
                      },
                    },
                  },
                  // capture roles of the participant at the time of participating
                  participantRoles: {
                    connectOrCreate: roleIds?.map((id) => ({
                      where: {
                        id: id,
                      },
                      create: {
                        id: id,
                      },
                    })),
                  },
                },
              },
            },
          },
        })
        console.log(
          `Successfully updated participants for question ${record.id}`
        )
      }
    } catch (error) {
      console.error(`Unable to update participants`, error)
    }
  }
})

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (!interaction.isCommand()) return
  const { commandName } = interaction
  console.log('Handling interaction for command', commandName)
  const command = commands.get(commandName)
  if (!command) {
    await interaction.reply({
      content: `Command not found 🤕`,
      ephemeral: true,
    })
    return
  }

  console.log(
    `Handling command "${command?.name}" for ${interaction.user.username}#${interaction.user.discriminator}`
  )

  await command.handle(interaction)
})

client.on('rateLimit', (info) => {
  console.log(
    `Rate limit hit ${info.timeout ? info.timeout : 'Unknown timeout '}`
  )
})

client.on(Events.ThreadUpdate, async (thread) => {
  console.log(`Thread ${thread.id} updated`)
})

export function createBot(token = process.env.DISCORD_BOT_TOKEN) {
  return client.login(token)
}

// capture SIGINT (Ctrl+C) to gracefully shutdown
process.on('SIGINT', () => {
  console.log('destroying client')
  client?.destroy()
  process.exit(0)
})

process.on('exit', () => {
  console.log('destroying client')
  client?.destroy()
})

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    console.log('destroying client')
    client?.destroy()
  })
}
