import { z } from 'zod'
import { FeatureWhereInputObjectSchema } from './FeatureWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureRelationFilter> = z
  .object({
    is: z.lazy(() => FeatureWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => FeatureWhereInputObjectSchema).optional(),
  })
  .strict()

export const FeatureRelationFilterObjectSchema = Schema
