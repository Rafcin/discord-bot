import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureTypeCountOutputTypeSelect> = z
  .object({
    features: z.boolean().optional(),
  })
  .strict()

export const FeatureTypeCountOutputTypeSelectObjectSchema = Schema
