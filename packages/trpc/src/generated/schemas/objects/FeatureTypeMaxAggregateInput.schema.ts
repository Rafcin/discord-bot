import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureTypeMaxAggregateInputType> = z
  .object({
    code: z.literal(true).optional(),
  })
  .strict()

export const FeatureTypeMaxAggregateInputObjectSchema = Schema
