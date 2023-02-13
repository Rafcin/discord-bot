import { z } from 'zod'
import { FeatureCreateNestedOneWithoutConfigurationsInputObjectSchema } from './FeatureCreateNestedOneWithoutConfigurationsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureCreateWithoutConfigurationInput> =
  z
    .object({
      id: z.string().optional(),
      feature: z.lazy(
        () => FeatureCreateNestedOneWithoutConfigurationsInputObjectSchema
      ),
      enabled: z.boolean().optional(),
    })
    .strict()

export const ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema =
  Schema
