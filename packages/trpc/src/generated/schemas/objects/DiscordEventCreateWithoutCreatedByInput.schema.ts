import { z } from 'zod'
import { EventScheduleCreateNestedOneWithoutEventInputObjectSchema } from './EventScheduleCreateNestedOneWithoutEventInput.schema'
import { DiscordEventAttendeeCreateNestedManyWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateNestedManyWithoutEventInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventCreateWithoutCreatedByInput> = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    start: z.date(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    schedule: z
      .lazy(() => EventScheduleCreateNestedOneWithoutEventInputObjectSchema)
      .optional(),
    attendees: z
      .lazy(
        () => DiscordEventAttendeeCreateNestedManyWithoutEventInputObjectSchema
      )
      .optional(),
    eventScheduleId: z.string(),
  })
  .strict()

export const DiscordEventCreateWithoutCreatedByInputObjectSchema = Schema
