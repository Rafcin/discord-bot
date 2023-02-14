import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { ParticipationUncheckedUpdateManyWithoutParticipantNestedInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutParticipantNestedInput.schema'
import { AnswerUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutOwnerNestedInput.schema'
import { DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInputObjectSchema } from './DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInput.schema'
import { DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DiscordEventUncheckedUpdateManyWithoutCreatedByNestedInput.schema'
import { EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserUncheckedUpdateWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
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
      createdSchedules: z
        .lazy(
          () =>
            EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const DiscordUserUncheckedUpdateWithoutAccountInputObjectSchema = Schema
