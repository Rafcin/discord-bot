import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureInputsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    featureCode: z.literal(true).optional(),
    name: z.literal(true).optional(),
    secure: z.literal(true).optional(),
  })
  .strict()

export const FeatureInputsMinAggregateInputObjectSchema = Schema
