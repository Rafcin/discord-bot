import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeSumAggregateInputType> = z
  .object({
    time: z.literal(true).optional(),
  })
  .strict()

export const DiscordEventAttendeeSumAggregateInputObjectSchema = Schema
