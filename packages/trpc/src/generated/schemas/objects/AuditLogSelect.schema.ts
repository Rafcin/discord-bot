import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AuditLogSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    action: z.boolean().optional(),
    data: z.boolean().optional(),
  })
  .strict()

export const AuditLogSelectObjectSchema = Schema
