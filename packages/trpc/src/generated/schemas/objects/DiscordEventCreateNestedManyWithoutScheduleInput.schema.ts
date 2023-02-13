import { z } from 'zod'
import { DiscordEventCreateWithoutScheduleInputObjectSchema } from './DiscordEventCreateWithoutScheduleInput.schema'
import { DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema } from './DiscordEventUncheckedCreateWithoutScheduleInput.schema'
import { DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema } from './DiscordEventCreateOrConnectWithoutScheduleInput.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordEventCreateNestedManyWithoutScheduleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordEventCreateWithoutScheduleInputObjectSchema),
          z
            .lazy(() => DiscordEventCreateWithoutScheduleInputObjectSchema)
            .array(),
          z.lazy(
            () => DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DiscordEventCreateNestedManyWithoutScheduleInputObjectSchema =
  Schema
