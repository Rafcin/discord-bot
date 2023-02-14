import { z } from 'zod'
import { QuestionCreateNestedOneWithoutParticipationInputObjectSchema } from './QuestionCreateNestedOneWithoutParticipationInput.schema'
import { DiscordUserCreateNestedOneWithoutParticipationsInputObjectSchema } from './DiscordUserCreateNestedOneWithoutParticipationsInput.schema'
import { DiscordRoleCreateNestedManyWithoutParticipationInputObjectSchema } from './DiscordRoleCreateNestedManyWithoutParticipationInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ParticipationCreateWithoutAnswerInput> = z
  .object({
    id: z.string().optional(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutParticipationInputObjectSchema
    ),
    participant: z.lazy(
      () => DiscordUserCreateNestedOneWithoutParticipationsInputObjectSchema
    ),
    participantRoles: z
      .lazy(
        () => DiscordRoleCreateNestedManyWithoutParticipationInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ParticipationCreateWithoutAnswerInputObjectSchema = Schema