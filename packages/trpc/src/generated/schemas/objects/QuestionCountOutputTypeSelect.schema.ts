import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.QuestionCountOutputTypeSelect> = z
  .object({
    participation: z.boolean().optional(),
  })
  .strict()

export const QuestionCountOutputTypeSelectObjectSchema = Schema
