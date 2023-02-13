import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    configurationId: z.literal(true).optional(),
    featureCode: z.literal(true).optional(),
    enabled: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const ConfigurationFeatureCountAggregateInputObjectSchema = Schema
