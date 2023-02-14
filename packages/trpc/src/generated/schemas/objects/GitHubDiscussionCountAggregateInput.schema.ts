import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GitHubDiscussionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    url: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const GitHubDiscussionCountAggregateInputObjectSchema = Schema
