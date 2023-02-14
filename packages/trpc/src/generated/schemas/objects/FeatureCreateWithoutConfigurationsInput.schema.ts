import { z } from 'zod'
import { FeatureTypeCreateNestedOneWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateNestedOneWithoutFeaturesInput.schema'
import { FeatureInputsCreateNestedManyWithoutFeatureInputObjectSchema } from './FeatureInputsCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureCreateWithoutConfigurationsInput> = z
  .object({
    code: z.string(),
    type: z.lazy(
      () => FeatureTypeCreateNestedOneWithoutFeaturesInputObjectSchema
    ),
    name: z.string(),
    description: z.string(),
    inputs: z
      .lazy(() => FeatureInputsCreateNestedManyWithoutFeatureInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureCreateWithoutConfigurationsInputObjectSchema = Schema
