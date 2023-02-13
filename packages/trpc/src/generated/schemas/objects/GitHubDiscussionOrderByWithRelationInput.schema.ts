import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { QuestionOrderByWithRelationInputObjectSchema } from './QuestionOrderByWithRelationInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    Question: z
      .lazy(() => QuestionOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const GitHubDiscussionOrderByWithRelationInputObjectSchema = Schema
