import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeMinAggregateInputType> = z
  .object({
    code: z.literal(true).optional(),
  })
  .strict()

export const FeatureTypeMinAggregateInputObjectSchema = Schema
