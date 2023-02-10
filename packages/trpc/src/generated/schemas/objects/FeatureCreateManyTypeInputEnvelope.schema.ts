import { z } from 'zod'
import { FeatureCreateManyTypeInputObjectSchema } from './FeatureCreateManyTypeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateManyTypeInputEnvelope> = z
  .object({
    data: z.lazy(() => FeatureCreateManyTypeInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const FeatureCreateManyTypeInputEnvelopeObjectSchema = Schema
