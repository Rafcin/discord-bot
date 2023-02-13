import { z } from 'zod'
import { ConfigurationFeatureConfigurationIdFeatureCodeCompoundUniqueInputObjectSchema } from './ConfigurationFeatureConfigurationIdFeatureCodeCompoundUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    configurationId_featureCode: z
      .lazy(
        () =>
          ConfigurationFeatureConfigurationIdFeatureCodeCompoundUniqueInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const ConfigurationFeatureWhereUniqueInputObjectSchema = Schema
