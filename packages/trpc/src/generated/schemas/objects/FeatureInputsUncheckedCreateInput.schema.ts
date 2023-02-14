import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureInputsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    featureCode: z.string(),
    name: z.string(),
    secure: z.boolean().optional(),
  })
  .strict()

export const FeatureInputsUncheckedCreateInputObjectSchema = Schema