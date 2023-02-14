import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInputObjectSchema } from './DiscordRoleUncheckedUpdateManyWithoutParticipationNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ParticipationUncheckedUpdateWithoutAnswerInput> =
  z
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
    })
    .strict()

export const ParticipationUncheckedUpdateWithoutAnswerInputObjectSchema = Schema
