import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AuditLogMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    action: z.literal(true).optional(),
    data: z.literal(true).optional(),
  })
  .strict()

export const AuditLogMaxAggregateInputObjectSchema = Schema
