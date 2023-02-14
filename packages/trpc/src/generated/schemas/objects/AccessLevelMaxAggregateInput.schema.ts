import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelMaxAggregateInputType> = z
  .object({
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
  })
  .strict()

export const AccessLevelMaxAggregateInputObjectSchema = Schema