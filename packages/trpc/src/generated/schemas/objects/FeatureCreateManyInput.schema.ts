import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateManyInput> = z
  .object({
    code: z.string(),
    name: z.string(),
    description: z.string(),
    featureTypeCode: z.string(),
  })
  .strict()

export const FeatureCreateManyInputObjectSchema = Schema