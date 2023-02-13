import { z } from 'zod'
import { FeatureArgsObjectSchema } from './FeatureArgs.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureInputsInclude> = z
  .object({
    feature: z
      .union([z.boolean(), z.lazy(() => FeatureArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const FeatureInputsIncludeObjectSchema = Schema
