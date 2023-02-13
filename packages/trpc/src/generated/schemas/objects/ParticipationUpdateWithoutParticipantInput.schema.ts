import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { QuestionUpdateOneRequiredWithoutParticipationNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutParticipationNestedInput.schema'
import { DiscordRoleUpdateManyWithoutParticipationNestedInputObjectSchema } from './DiscordRoleUpdateManyWithoutParticipationNestedInput.schema'
import { AnswerUpdateOneWithoutParticipationNestedInputObjectSchema } from './AnswerUpdateOneWithoutParticipationNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ParticipationUpdateWithoutParticipantInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    question: z
      .lazy(
        () =>
          QuestionUpdateOneRequiredWithoutParticipationNestedInputObjectSchema
      )
      .optional(),
    participantRoles: z
      .lazy(
        () => DiscordRoleUpdateManyWithoutParticipationNestedInputObjectSchema
      )
      .optional(),
    answer: z
      .lazy(() => AnswerUpdateOneWithoutParticipationNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const ParticipationUpdateWithoutParticipantInputObjectSchema = Schema
