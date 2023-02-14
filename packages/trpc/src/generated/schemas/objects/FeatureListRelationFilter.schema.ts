import { z } from 'zod'
import { FeatureWhereInputObjectSchema } from './FeatureWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureListRelationFilter> = z
  .object({
    every: z.lazy(() => FeatureWhereInputObjectSchema).optional(),
    some: z.lazy(() => FeatureWhereInputObjectSchema).optional(),
    none: z.lazy(() => FeatureWhereInputObjectSchema).optional(),
  })
  .strict()

export const FeatureListRelationFilterObjectSchema = Schema
