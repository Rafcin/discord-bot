import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AuditLogUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    userId: z.string(),
    action: z.string(),
    data: z.string(),
  })
  .strict()

export const AuditLogUncheckedCreateInputObjectSchema = Schema