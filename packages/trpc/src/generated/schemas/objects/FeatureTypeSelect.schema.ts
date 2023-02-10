import { z } from 'zod'
import { FeatureFindManySchema } from '../findManyFeature.schema'
import { FeatureTypeCountOutputTypeArgsObjectSchema } from './FeatureTypeCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeSelect> = z
  .object({
    code: z.boolean().optional(),
    features: z
      .union([z.boolean(), z.lazy(() => FeatureFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => FeatureTypeCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const FeatureTypeSelectObjectSchema = Schema
