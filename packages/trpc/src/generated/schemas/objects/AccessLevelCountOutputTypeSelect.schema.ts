import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AccessLevelCountOutputTypeSelect> = z
  .object({
    role: z.boolean().optional(),
  })
  .strict()

export const AccessLevelCountOutputTypeSelectObjectSchema = Schema
