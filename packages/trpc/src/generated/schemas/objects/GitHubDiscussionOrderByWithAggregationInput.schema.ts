import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { GitHubDiscussionCountOrderByAggregateInputObjectSchema } from './GitHubDiscussionCountOrderByAggregateInput.schema'
import { GitHubDiscussionMaxOrderByAggregateInputObjectSchema } from './GitHubDiscussionMaxOrderByAggregateInput.schema'
import { GitHubDiscussionMinOrderByAggregateInputObjectSchema } from './GitHubDiscussionMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GitHubDiscussionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => GitHubDiscussionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => GitHubDiscussionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => GitHubDiscussionMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const GitHubDiscussionOrderByWithAggregationInputObjectSchema = Schema
