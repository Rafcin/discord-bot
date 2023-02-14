import { z } from 'zod'
import { FeatureUncheckedCreateNestedManyWithoutTypeInputObjectSchema } from './FeatureUncheckedCreateNestedManyWithoutTypeInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureTypeUncheckedCreateInput> = z
  .object({
    code: z.string(),
    features: z
      .lazy(() => FeatureUncheckedCreateNestedManyWithoutTypeInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureTypeUncheckedCreateInputObjectSchema = Schema
