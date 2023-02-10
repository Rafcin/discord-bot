import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnswerCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    selectedAt: z.literal(true).optional(),
    selectedBy: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
    content: z.literal(true).optional(),
    url: z.literal(true).optional(),
    questionId: z.literal(true).optional(),
    participationId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const AnswerCountAggregateInputObjectSchema = Schema
