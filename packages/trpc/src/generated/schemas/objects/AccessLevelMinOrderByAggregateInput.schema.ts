import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelMinOrderByAggregateInput> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const AccessLevelMinOrderByAggregateInputObjectSchema = Schema
