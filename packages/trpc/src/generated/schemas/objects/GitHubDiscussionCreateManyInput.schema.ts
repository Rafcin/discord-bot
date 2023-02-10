import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionCreateManyInput> = z
  .object({
    id: z.string(),
    url: z.string(),
  })
  .strict()

export const GitHubDiscussionCreateManyInputObjectSchema = Schema
