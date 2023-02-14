import { z } from 'zod'
import { DiscordUserCreateWithoutParticipationsInputObjectSchema } from './DiscordUserCreateWithoutParticipationsInput.schema'
import { DiscordUserUncheckedCreateWithoutParticipationsInputObjectSchema } from './DiscordUserUncheckedCreateWithoutParticipationsInput.schema'
import { DiscordUserCreateOrConnectWithoutParticipationsInputObjectSchema } from './DiscordUserCreateOrConnectWithoutParticipationsInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserCreateNestedOneWithoutParticipationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordUserCreateWithoutParticipationsInputObjectSchema),
          z.lazy(
            () =>
              DiscordUserUncheckedCreateWithoutParticipationsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => DiscordUserCreateOrConnectWithoutParticipationsInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const DiscordUserCreateNestedOneWithoutParticipationsInputObjectSchema =
  Schema
