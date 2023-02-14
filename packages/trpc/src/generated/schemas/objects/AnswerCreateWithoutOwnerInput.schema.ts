import { z } from 'zod'
import { QuestionCreateNestedOneWithoutAnswerInputObjectSchema } from './QuestionCreateNestedOneWithoutAnswerInput.schema'
import { ParticipationCreateNestedOneWithoutAnswerInputObjectSchema } from './ParticipationCreateNestedOneWithoutAnswerInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AnswerCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    selectedAt: z.date().optional(),
    selectedBy: z.string(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    content: z.string(),
    url: z.string().optional().nullable(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutAnswerInputObjectSchema
    ),
    participation: z.lazy(
      () => ParticipationCreateNestedOneWithoutAnswerInputObjectSchema
    ),
  })
  .strict()

export const AnswerCreateWithoutOwnerInputObjectSchema = Schema