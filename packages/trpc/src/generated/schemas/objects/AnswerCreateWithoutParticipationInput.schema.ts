import { z } from 'zod'
import { DiscordUserCreateNestedOneWithoutAnswersInputObjectSchema } from './DiscordUserCreateNestedOneWithoutAnswersInput.schema'
import { QuestionCreateNestedOneWithoutAnswerInputObjectSchema } from './QuestionCreateNestedOneWithoutAnswerInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AnswerCreateWithoutParticipationInput> = z
  .object({
    id: z.string().optional(),
    selectedAt: z.date().optional(),
    selectedBy: z.string(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    owner: z.lazy(
      () => DiscordUserCreateNestedOneWithoutAnswersInputObjectSchema
    ),
    content: z.string(),
    url: z.string().optional().nullable(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutAnswerInputObjectSchema
    ),
  })
  .strict()

export const AnswerCreateWithoutParticipationInputObjectSchema = Schema
