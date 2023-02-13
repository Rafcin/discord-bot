import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureTypeCreateWithoutFeaturesInput> = z
  .object({
    code: z.string(),
  })
  .strict()

export const FeatureTypeCreateWithoutFeaturesInputObjectSchema = Schema
