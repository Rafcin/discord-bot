import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AccountAvgAggregateInputType> = z
  .object({
    expires_at: z.literal(true).optional(),
    refresh_token_expires_in: z.literal(true).optional(),
  })
  .strict()

export const AccountAvgAggregateInputObjectSchema = Schema
