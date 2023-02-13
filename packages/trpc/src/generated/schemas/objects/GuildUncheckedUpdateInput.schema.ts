import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { ConfigurationUncheckedUpdateOneWithoutGuildNestedInputObjectSchema } from './ConfigurationUncheckedUpdateOneWithoutGuildNestedInput.schema'
import { QuestionUncheckedUpdateManyWithoutGuildNestedInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutGuildNestedInput.schema'
import { EventScheduleUncheckedUpdateManyWithoutGuildNestedInputObjectSchema } from './EventScheduleUncheckedUpdateManyWithoutGuildNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.GuildUncheckedUpdateInput> = z
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
    configuration: z
      .lazy(
        () => ConfigurationUncheckedUpdateOneWithoutGuildNestedInputObjectSchema
      )
      .optional(),
    questions: z
      .lazy(
        () => QuestionUncheckedUpdateManyWithoutGuildNestedInputObjectSchema
      )
      .optional(),
    EventSchedule: z
      .lazy(
        () =>
          EventScheduleUncheckedUpdateManyWithoutGuildNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const GuildUncheckedUpdateInputObjectSchema = Schema
