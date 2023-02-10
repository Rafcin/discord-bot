import { z } from 'zod'
import { GitHubDiscussionWhereInputObjectSchema } from './GitHubDiscussionWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionRelationFilter> = z
  .object({
    is: z
      .lazy(() => GitHubDiscussionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => GitHubDiscussionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const GitHubDiscussionRelationFilterObjectSchema = Schema
