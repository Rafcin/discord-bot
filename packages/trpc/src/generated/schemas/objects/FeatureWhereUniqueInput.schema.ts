import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureWhereUniqueInput> = z
  .object({
    code: z.string().optional(),
  })
  .strict()

export const FeatureWhereUniqueInputObjectSchema = Schema
