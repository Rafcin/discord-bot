import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateManyTypeInput> = z
  .object({
    code: z.string(),
    name: z.string(),
    description: z.string(),
  })
  .strict()

export const FeatureCreateManyTypeInputObjectSchema = Schema
