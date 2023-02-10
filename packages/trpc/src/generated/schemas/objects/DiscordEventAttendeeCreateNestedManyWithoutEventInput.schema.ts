import { z } from 'zod'
import { DiscordEventAttendeeCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateWithoutEventInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutEventInput.schema'
import { DiscordEventAttendeeCreateOrConnectWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateOrConnectWithoutEventInput.schema'
import { DiscordEventAttendeeCreateManyEventInputEnvelopeObjectSchema } from './DiscordEventAttendeeCreateManyEventInputEnvelope.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCreateNestedManyWithoutEventInput> =
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
      createMany: z
        .lazy(
          () => DiscordEventAttendeeCreateManyEventInputEnvelopeObjectSchema
        )
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

export const DiscordEventAttendeeCreateNestedManyWithoutEventInputObjectSchema =
  Schema