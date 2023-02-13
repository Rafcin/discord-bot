import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { DiscordUserUpdateOneRequiredWithoutCreatedEventsNestedInputObjectSchema } from './DiscordUserUpdateOneRequiredWithoutCreatedEventsNestedInput.schema'
import { EventScheduleUpdateOneWithoutEventNestedInputObjectSchema } from './EventScheduleUpdateOneWithoutEventNestedInput.schema'
import { DiscordEventAttendeeUpdateManyWithoutEventNestedInputObjectSchema } from './DiscordEventAttendeeUpdateManyWithoutEventNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordEventUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    imageUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    location: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    start: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdBy: z
      .lazy(
        () =>
          DiscordUserUpdateOneRequiredWithoutCreatedEventsNestedInputObjectSchema
      )
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    schedule: z
      .lazy(() => EventScheduleUpdateOneWithoutEventNestedInputObjectSchema)
      .optional(),
    attendees: z
      .lazy(
        () => DiscordEventAttendeeUpdateManyWithoutEventNestedInputObjectSchema
      )
      .optional(),
    eventScheduleId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const DiscordEventUpdateInputObjectSchema = Schema
