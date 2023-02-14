import { z } from 'zod'
import { DiscordEventCreateWithoutAttendeesInputObjectSchema } from './DiscordEventCreateWithoutAttendeesInput.schema'
import { DiscordEventUncheckedCreateWithoutAttendeesInputObjectSchema } from './DiscordEventUncheckedCreateWithoutAttendeesInput.schema'
import { DiscordEventCreateOrConnectWithoutAttendeesInputObjectSchema } from './DiscordEventCreateOrConnectWithoutAttendeesInput.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventCreateNestedOneWithoutAttendeesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordEventCreateWithoutAttendeesInputObjectSchema),
          z.lazy(
            () => DiscordEventUncheckedCreateWithoutAttendeesInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => DiscordEventCreateOrConnectWithoutAttendeesInputObjectSchema
        )
        .optional(),
      connect: z
        .lazy(() => DiscordEventWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict()

export const DiscordEventCreateNestedOneWithoutAttendeesInputObjectSchema =
  Schema
