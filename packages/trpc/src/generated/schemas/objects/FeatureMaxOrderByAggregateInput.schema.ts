import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureMaxOrderByAggregateInput> = z
  .object({
    code: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    featureTypeCode: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const FeatureMaxOrderByAggregateInputObjectSchema = Schema
