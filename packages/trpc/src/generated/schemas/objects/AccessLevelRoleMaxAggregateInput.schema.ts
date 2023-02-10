import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    accessLevelId: z.literal(true).optional(),
    configurationId: z.literal(true).optional(),
    discordRoleId: z.literal(true).optional(),
  })
  .strict()

export const AccessLevelRoleMaxAggregateInputObjectSchema = Schema
