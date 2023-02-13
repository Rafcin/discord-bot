import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.QuestionTagCreateWithoutQuestionsInput> = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .strict()

export const QuestionTagCreateWithoutQuestionsInputObjectSchema = Schema
