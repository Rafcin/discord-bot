import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
  })
  .strict()

export const DiscordUserMinAggregateInputObjectSchema = Schema
