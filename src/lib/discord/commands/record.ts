/**
 * @name Discord Bot Record Command
 * @description This command is used to record each user when they speak in the designated channel.
 */

import { SlashCommandBuilder } from '@discordjs/builders'
import {
  EmbedBuilder,
  type Role,
  type User,
  type InteractionReplyOptions,
  type ChatInputCommandInteraction,
} from 'discord.js'
import * as MESSAGES from './_messages'

export async function handler(
  interaction: ChatInputCommandInteraction
): Promise<InteractionReplyOptions | string> {
  const { member: caller, guild } = interaction
  if (!caller || !guild) return MESSAGES.SOMETHING_WENT_WRONG

  const embed = new EmbedBuilder()
  embed
    .setTitle('/record')
    .addFields(
      { name: '🎙️', value: 'Recording...' },
      { name: 'Recording ID', value: `ID` },
      { name: 'Channel', value: `NAME` }
    )
  const result: InteractionReplyOptions = { embeds: [embed], ephemeral: true }

  // catch-all return "something went wrong" response
  return result
}

export const config = new SlashCommandBuilder()
  .setName('record')
  .setDescription(
    'Join the selected or current channel and record the conversation'
  )
  .setDefaultMemberPermissions('0') // 0 = disabled by default
