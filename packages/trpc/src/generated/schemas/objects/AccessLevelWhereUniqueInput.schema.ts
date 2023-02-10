import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelWhereUniqueInput> = z
  .object({
    name: z.string().optional(),
  })
  .strict()

export const AccessLevelWhereUniqueInputObjectSchema = Schema
