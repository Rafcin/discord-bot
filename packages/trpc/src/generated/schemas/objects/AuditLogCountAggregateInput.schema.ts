import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AuditLogCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    action: z.literal(true).optional(),
    data: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const AuditLogCountAggregateInputObjectSchema = Schema
