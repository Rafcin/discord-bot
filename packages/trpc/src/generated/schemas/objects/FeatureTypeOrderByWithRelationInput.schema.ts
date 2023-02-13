import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FeatureOrderByRelationAggregateInputObjectSchema } from './FeatureOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureTypeOrderByWithRelationInput> = z
  .object({
    code: z.lazy(() => SortOrderSchema).optional(),
    features: z
      .lazy(() => FeatureOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureTypeOrderByWithRelationInputObjectSchema = Schema
