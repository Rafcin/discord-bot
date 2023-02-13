import { z } from 'zod'
import { FeatureCreateNestedManyWithoutTypeInputObjectSchema } from './FeatureCreateNestedManyWithoutTypeInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureTypeCreateInput> = z
  .object({
    code: z.string(),
    features: z
      .lazy(() => FeatureCreateNestedManyWithoutTypeInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureTypeCreateInputObjectSchema = Schema
