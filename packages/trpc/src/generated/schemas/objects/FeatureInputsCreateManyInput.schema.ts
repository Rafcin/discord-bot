import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    featureCode: z.string(),
    name: z.string(),
    secure: z.boolean().optional(),
  })
  .strict()

export const FeatureInputsCreateManyInputObjectSchema = Schema