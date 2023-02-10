import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureCreateManyConfigurationInput> =
  z
    .object({
      id: z.string().optional(),
      featureCode: z.string(),
      enabled: z.boolean().optional(),
    })
    .strict()

export const ConfigurationFeatureCreateManyConfigurationInputObjectSchema =
  Schema
