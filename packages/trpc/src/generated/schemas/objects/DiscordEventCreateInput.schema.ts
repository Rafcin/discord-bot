import { z } from 'zod'
import { DiscordUserCreateNestedOneWithoutCreatedEventsInputObjectSchema } from './DiscordUserCreateNestedOneWithoutCreatedEventsInput.schema'
import { EventScheduleCreateNestedOneWithoutEventInputObjectSchema } from './EventScheduleCreateNestedOneWithoutEventInput.schema'
import { DiscordEventAttendeeCreateNestedManyWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateNestedManyWithoutEventInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventCreateInput> = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    start: z.date(),
    createdBy: z.lazy(
      () => DiscordUserCreateNestedOneWithoutCreatedEventsInputObjectSchema
    ),
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

export const DiscordEventCreateInputObjectSchema = Schema