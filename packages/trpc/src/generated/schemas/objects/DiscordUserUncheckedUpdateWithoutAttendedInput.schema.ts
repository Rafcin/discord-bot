import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ParticipationUncheckedUpdateManyWithoutParticipantNestedInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutParticipantNestedInput.schema'
import { AnswerUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutOwnerNestedInput.schema'
import { DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInput.schema'
import { EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserUncheckedUpdateWithoutAttendedInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      participations: z
        .lazy(
          () =>
            ParticipationUncheckedUpdateManyWithoutParticipantNestedInputObjectSchema
        )
        .optional(),
      answers: z
        .lazy(
          () => AnswerUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema
        )
        .optional(),
      createdEvents: z
        .lazy(
          () =>
            DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema
        )
        .optional(),
      createdSchedules: z
        .lazy(
          () =>
            EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const DiscordUserUncheckedUpdateWithoutAttendedInputObjectSchema = Schema
