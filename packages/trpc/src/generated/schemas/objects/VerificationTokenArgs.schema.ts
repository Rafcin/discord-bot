import { z } from 'zod'
import { VerificationTokenSelectObjectSchema } from './VerificationTokenSelect.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.VerificationTokenArgs> = z
  .object({
    select: z.lazy(() => VerificationTokenSelectObjectSchema).optional(),
  })
  .strict()

export const VerificationTokenArgsObjectSchema = Schema
