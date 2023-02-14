import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AnswerUncheckedCreateWithoutQuestionInput> = z
  .object({
    id: z.string().optional(),
    selectedAt: z.date().optional(),
    selectedBy: z.string(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    ownerId: z.string(),
    content: z.string(),
    url: z.string().optional().nullable(),
    participationId: z.string(),
  })
  .strict()

export const AnswerUncheckedCreateWithoutQuestionInputObjectSchema = Schema
