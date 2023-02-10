import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateManyInput> = z
  .object({
    id: z.string().optional(),
    questionId: z.string(),
    participantId: z.string(),
  })
  .strict()

export const ParticipationCreateManyInputObjectSchema = Schema
