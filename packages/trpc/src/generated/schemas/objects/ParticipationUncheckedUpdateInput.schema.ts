import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInputObjectSchema } from './DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInput.schema'
import { AnswerUncheckedUpdateOneWithoutParticipationNestedInputObjectSchema } from './AnswerUncheckedUpdateOneWithoutParticipationNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ParticipationUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    questionId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    participantId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    participantRoles: z
      .lazy(
        () =>
          DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInputObjectSchema
      )
      .optional(),
    answer: z
      .lazy(
        () =>
          AnswerUncheckedUpdateOneWithoutParticipationNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ParticipationUncheckedUpdateInputObjectSchema = Schema
