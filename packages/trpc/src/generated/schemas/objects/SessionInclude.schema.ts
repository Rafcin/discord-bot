import { z } from 'zod'
import { UserArgsObjectSchema } from './UserArgs.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.SessionInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict()

export const SessionIncludeObjectSchema = Schema
