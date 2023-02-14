import { z } from 'zod'
import { ConfigurationFeatureCreateNestedManyWithoutFeatureInputObjectSchema } from './ConfigurationFeatureCreateNestedManyWithoutFeatureInput.schema'
import { FeatureInputsCreateNestedManyWithoutFeatureInputObjectSchema } from './FeatureInputsCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureCreateWithoutTypeInput> = z
  .object({
    code: z.string(),
    name: z.string(),
    description: z.string(),
    configurations: z
      .lazy(
        () =>
          ConfigurationFeatureCreateNestedManyWithoutFeatureInputObjectSchema
      )
      .optional(),
    inputs: z
      .lazy(() => FeatureInputsCreateNestedManyWithoutFeatureInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureCreateWithoutTypeInputObjectSchema = Schema
