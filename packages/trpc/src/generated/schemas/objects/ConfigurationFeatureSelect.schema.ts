import { z } from 'zod'
import { ConfigurationArgsObjectSchema } from './ConfigurationArgs.schema'
import { FeatureArgsObjectSchema } from './FeatureArgs.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationFeatureSelect> = z
  .object({
    id: z.boolean().optional(),
    configuration: z
      .union([z.boolean(), z.lazy(() => ConfigurationArgsObjectSchema)])
      .optional(),
    configurationId: z.boolean().optional(),
    feature: z
      .union([z.boolean(), z.lazy(() => FeatureArgsObjectSchema)])
      .optional(),
    featureCode: z.boolean().optional(),
    enabled: z.boolean().optional(),
  })
  .strict()

export const ConfigurationFeatureSelectObjectSchema = Schema