import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { GuildUpdateOneRequiredWithoutEventScheduleNestedInputObjectSchema } from './GuildUpdateOneRequiredWithoutEventScheduleNestedInput.schema'
import { DiscordEventUpdateManyWithoutScheduleNestedInputObjectSchema } from './DiscordEventUpdateManyWithoutScheduleNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.EventScheduleUpdateWithoutCreatedByInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
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
    guild: z
      .lazy(
        () => GuildUpdateOneRequiredWithoutEventScheduleNestedInputObjectSchema
      )
      .optional(),
    event: z
      .lazy(() => DiscordEventUpdateManyWithoutScheduleNestedInputObjectSchema)
      .optional(),
    schedule: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EventScheduleUpdateWithoutCreatedByInputObjectSchema = Schema