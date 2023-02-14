import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
  })
  .strict()

export const DiscordUserMaxAggregateInputObjectSchema = Schema