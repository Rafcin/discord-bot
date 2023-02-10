import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ParticipationUncheckedUpdateManyWithoutParticipantNestedInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutParticipantNestedInput.schema'
import { AnswerUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutOwnerNestedInput.schema'
import { DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInputObjectSchema } from './DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInput.schema'
import { DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUncheckedUpdateWithoutCreatedSchedulesInput> =
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
      attended: z
        .lazy(
          () =>
            DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInputObjectSchema
        )
        .optional(),
      createdEvents: z
        .lazy(
          () =>
            DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const DiscordUserUncheckedUpdateWithoutCreatedSchedulesInputObjectSchema =
  Schema