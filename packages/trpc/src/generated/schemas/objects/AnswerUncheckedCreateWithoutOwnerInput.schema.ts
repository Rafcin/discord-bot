import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AnswerUncheckedCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    selectedAt: z.date().optional(),
    selectedBy: z.string(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    content: z.string(),
    url: z.string().optional().nullable(),
    questionId: z.string(),
    participationId: z.string(),
  })
  .strict()

export const AnswerUncheckedCreateWithoutOwnerInputObjectSchema = Schema
