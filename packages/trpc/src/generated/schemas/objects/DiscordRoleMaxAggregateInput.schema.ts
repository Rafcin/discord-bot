import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordRoleMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict()

export const DiscordRoleMaxAggregateInputObjectSchema = Schema