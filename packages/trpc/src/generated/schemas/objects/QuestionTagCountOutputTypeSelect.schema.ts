import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.QuestionTagCountOutputTypeSelect> = z
  .object({
    questions: z.boolean().optional(),
  })
  .strict()

export const QuestionTagCountOutputTypeSelectObjectSchema = Schema
