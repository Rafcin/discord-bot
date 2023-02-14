import { z } from 'zod'
import { ConfigurationFeatureSelectObjectSchema } from './ConfigurationFeatureSelect.schema'
import { ConfigurationFeatureIncludeObjectSchema } from './ConfigurationFeatureInclude.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationFeatureArgs> = z
  .object({
    select: z.lazy(() => ConfigurationFeatureSelectObjectSchema).optional(),
    include: z.lazy(() => ConfigurationFeatureIncludeObjectSchema).optional(),
  })
  .strict()

export const ConfigurationFeatureArgsObjectSchema = Schema
