import { z } from 'zod'
import { DiscordEventAttendeeUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateNestedManyWithoutEventInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventUncheckedCreateWithoutScheduleInput> =
  z
    .object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      imageUrl: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      start: z.date(),
      createdById: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      attendees: z
        .lazy(
          () =>
            DiscordEventAttendeeUncheckedCreateNestedManyWithoutEventInputObjectSchema
        )
        .optional(),
      eventScheduleId: z.string(),
    })
    .strict()

export const DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema =
  Schema