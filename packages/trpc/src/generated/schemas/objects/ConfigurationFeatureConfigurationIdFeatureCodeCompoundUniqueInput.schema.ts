import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureConfigurationIdFeatureCodeCompoundUniqueInput> =
  z
    .object({
      configurationId: z.string(),
      featureCode: z.string(),
    })
    .strict()

export const ConfigurationFeatureConfigurationIdFeatureCodeCompoundUniqueInputObjectSchema =
  Schema
