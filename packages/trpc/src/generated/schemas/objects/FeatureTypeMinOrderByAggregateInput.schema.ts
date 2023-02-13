import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureTypeMinOrderByAggregateInput> = z
  .object({
    code: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const FeatureTypeMinOrderByAggregateInputObjectSchema = Schema
