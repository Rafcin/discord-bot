import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureMaxAggregateInputType> = z
  .object({
    code: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    featureTypeCode: z.literal(true).optional(),
  })
  .strict()

export const FeatureMaxAggregateInputObjectSchema = Schema