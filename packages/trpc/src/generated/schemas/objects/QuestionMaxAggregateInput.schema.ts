import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.QuestionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    threadId: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
    channelName: z.literal(true).optional(),
    threadMetaUpdatedAt: z.literal(true).optional(),
    title: z.literal(true).optional(),
    isSolved: z.literal(true).optional(),
    url: z.literal(true).optional(),
    guildId: z.literal(true).optional(),
    githubDiscussionId: z.literal(true).optional(),
    tagId: z.literal(true).optional(),
  })
  .strict()

export const QuestionMaxAggregateInputObjectSchema = Schema
