import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    accessLevelId: z.literal(true).optional(),
    configurationId: z.literal(true).optional(),
    discordRoleId: z.literal(true).optional(),
  })
  .strict()

export const AccessLevelRoleMinAggregateInputObjectSchema = Schema
