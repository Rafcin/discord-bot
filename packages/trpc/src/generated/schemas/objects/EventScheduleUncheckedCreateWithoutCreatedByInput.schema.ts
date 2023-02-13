import { z } from 'zod'
import { DiscordEventUncheckedCreateNestedManyWithoutScheduleInputObjectSchema } from './DiscordEventUncheckedCreateNestedManyWithoutScheduleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.EventScheduleUncheckedCreateWithoutCreatedByInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      guildId: z.string(),
      event: z
        .lazy(
          () =>
            DiscordEventUncheckedCreateNestedManyWithoutScheduleInputObjectSchema
        )
        .optional(),
      schedule: z.string(),
    })
    .strict()

export const EventScheduleUncheckedCreateWithoutCreatedByInputObjectSchema =
  Schema
