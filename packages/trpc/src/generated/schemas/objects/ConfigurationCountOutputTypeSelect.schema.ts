import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationCountOutputTypeSelect> = z
  .object({
    roles: z.boolean().optional(),
    features: z.boolean().optional(),
  })
  .strict()

export const ConfigurationCountOutputTypeSelectObjectSchema = Schema
