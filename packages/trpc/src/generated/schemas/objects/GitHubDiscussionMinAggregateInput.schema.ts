import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    url: z.literal(true).optional(),
  })
  .strict()

export const GitHubDiscussionMinAggregateInputObjectSchema = Schema
