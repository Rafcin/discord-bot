import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    accessLevelId: z.literal(true).optional(),
    configurationId: z.literal(true).optional(),
    discordRoleId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const AccessLevelRoleCountAggregateInputObjectSchema = Schema
