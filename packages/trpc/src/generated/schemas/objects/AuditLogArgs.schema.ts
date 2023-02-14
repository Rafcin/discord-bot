import { z } from 'zod'
import { AuditLogSelectObjectSchema } from './AuditLogSelect.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AuditLogArgs> = z
  .object({
    select: z.lazy(() => AuditLogSelectObjectSchema).optional(),
  })
  .strict()

export const AuditLogArgsObjectSchema = Schema
