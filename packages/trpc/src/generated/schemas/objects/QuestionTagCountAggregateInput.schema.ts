import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.QuestionTagCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const QuestionTagCountAggregateInputObjectSchema = Schema
