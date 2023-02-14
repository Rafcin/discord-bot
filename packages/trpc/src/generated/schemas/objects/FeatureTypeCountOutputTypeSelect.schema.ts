import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureTypeCountOutputTypeSelect> = z
  .object({
    features: z.boolean().optional(),
  })
  .strict()

export const FeatureTypeCountOutputTypeSelectObjectSchema = Schema