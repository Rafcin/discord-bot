import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureCountOrderByAggregateInput> = z
  .object({
    code: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    featureTypeCode: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const FeatureCountOrderByAggregateInputObjectSchema = Schema
