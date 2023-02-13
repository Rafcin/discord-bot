import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const GitHubDiscussionMinOrderByAggregateInputObjectSchema = Schema
