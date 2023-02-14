import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const DiscordUserCountAggregateInputObjectSchema = Schema
