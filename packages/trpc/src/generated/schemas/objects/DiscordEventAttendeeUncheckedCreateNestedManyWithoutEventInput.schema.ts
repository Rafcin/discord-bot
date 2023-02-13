import { z } from 'zod'
import { DiscordEventAttendeeCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateWithoutEventInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutEventInput.schema'
import { DiscordEventAttendeeCreateOrConnectWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateOrConnectWithoutEventInput.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUncheckedCreateNestedManyWithoutEventInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordEventAttendeeCreateWithoutEventInputObjectSchema),
          z
            .lazy(() => DiscordEventAttendeeCreateWithoutEventInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              DiscordEventAttendeeCreateOrConnectWithoutEventInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeCreateOrConnectWithoutEventInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
          z
            .lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict()

export const DiscordEventAttendeeUncheckedCreateNestedManyWithoutEventInputObjectSchema =
  Schema
