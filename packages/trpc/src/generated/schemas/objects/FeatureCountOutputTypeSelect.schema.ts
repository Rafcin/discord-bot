import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureCountOutputTypeSelect> = z
  .object({
    configurations: z.boolean().optional(),
    inputs: z.boolean().optional(),
  })
  .strict()

export const FeatureCountOutputTypeSelectObjectSchema = Schema
