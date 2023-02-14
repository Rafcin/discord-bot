import { z } from 'zod'
import { DiscordEventAttendeeCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateWithoutMemberInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutMemberInput.schema'
import { DiscordEventAttendeeCreateOrConnectWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateOrConnectWithoutMemberInput.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCreateNestedManyWithoutMemberInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => DiscordEventAttendeeCreateWithoutMemberInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventAttendeeCreateWithoutMemberInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              DiscordEventAttendeeCreateOrConnectWithoutMemberInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeCreateOrConnectWithoutMemberInputObjectSchema
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

export const DiscordEventAttendeeCreateNestedManyWithoutMemberInputObjectSchema =
  Schema
