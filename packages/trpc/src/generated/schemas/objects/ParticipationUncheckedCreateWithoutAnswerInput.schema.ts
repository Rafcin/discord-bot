import { z } from 'zod'
import { DiscordRoleUncheckedCreateNestedManyWithoutParticipationInputObjectSchema } from './DiscordRoleUncheckedCreateNestedManyWithoutParticipationInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ParticipationUncheckedCreateWithoutAnswerInput> =
  z
    .object({
      id: z.string().optional(),
      questionId: z.string(),
      participantId: z.string(),
      participantRoles: z
        .lazy(
          () =>
            DiscordRoleUncheckedCreateNestedManyWithoutParticipationInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const ParticipationUncheckedCreateWithoutAnswerInputObjectSchema = Schema
