import { z } from 'zod'
import { ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureUncheckedCreateWithoutInputsInput> = z
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
    featureTypeCode: z.string(),
  })
  .strict()

export const FeatureUncheckedCreateWithoutInputsInputObjectSchema = Schema
