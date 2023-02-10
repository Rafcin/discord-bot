import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagCreateManyInput> = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .strict()

export const QuestionTagCreateManyInputObjectSchema = Schema