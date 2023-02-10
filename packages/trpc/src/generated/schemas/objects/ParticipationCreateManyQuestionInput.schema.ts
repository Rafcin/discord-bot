import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateManyQuestionInput> = z
  .object({
    id: z.string().optional(),
    participantId: z.string(),
  })
  .strict()

export const ParticipationCreateManyQuestionInputObjectSchema = Schema
