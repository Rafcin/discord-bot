import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureInputsCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    featureCode: z.literal(true).optional(),
    name: z.literal(true).optional(),
    secure: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const FeatureInputsCountAggregateInputObjectSchema = Schema