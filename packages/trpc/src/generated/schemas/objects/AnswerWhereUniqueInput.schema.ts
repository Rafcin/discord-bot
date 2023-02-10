import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnswerWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    questionId: z.string().optional(),
    participationId: z.string().optional(),
  })
  .strict()

export const AnswerWhereUniqueInputObjectSchema = Schema
