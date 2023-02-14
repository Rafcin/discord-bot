import { z } from 'zod'
import { ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInput.schema'
import { FeatureInputsUncheckedCreateNestedManyWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureUncheckedCreateInput> = z
  .object({
    code: z.string(),
    name: z.string(),
    description: z.string(),
    configurations: z
      .lazy(
        () =>
          ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInputObjectSchema
      )
      .optional(),
    inputs: z
      .lazy(
        () =>
          FeatureInputsUncheckedCreateNestedManyWithoutFeatureInputObjectSchema
      )
      .optional(),
    featureTypeCode: z.string(),
  })
  .strict()

export const FeatureUncheckedCreateInputObjectSchema = Schema
