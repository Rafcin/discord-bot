import { z } from 'zod'
import { DiscordUserCreateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserCreateWithoutCreatedSchedulesInput.schema'
import { DiscordUserUncheckedCreateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserUncheckedCreateWithoutCreatedSchedulesInput.schema'
import { DiscordUserCreateOrConnectWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserCreateOrConnectWithoutCreatedSchedulesInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserCreateNestedOneWithoutCreatedSchedulesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => DiscordUserCreateWithoutCreatedSchedulesInputObjectSchema
          ),
          z.lazy(
            () =>
              DiscordUserUncheckedCreateWithoutCreatedSchedulesInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            DiscordUserCreateOrConnectWithoutCreatedSchedulesInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const DiscordUserCreateNestedOneWithoutCreatedSchedulesInputObjectSchema =
  Schema
