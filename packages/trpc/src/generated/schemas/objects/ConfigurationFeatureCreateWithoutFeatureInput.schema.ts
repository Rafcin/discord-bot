import { z } from 'zod'
import { ConfigurationCreateNestedOneWithoutFeaturesInputObjectSchema } from './ConfigurationCreateNestedOneWithoutFeaturesInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationFeatureCreateWithoutFeatureInput> =
  z
    .object({
      id: z.string().optional(),
      configuration: z.lazy(
        () => ConfigurationCreateNestedOneWithoutFeaturesInputObjectSchema
      ),
      enabled: z.boolean().optional(),
    })
    .strict()

export const ConfigurationFeatureCreateWithoutFeatureInputObjectSchema = Schema