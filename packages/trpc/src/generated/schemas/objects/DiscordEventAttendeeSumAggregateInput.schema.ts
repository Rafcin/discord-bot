import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeSumAggregateInputType> = z
  .object({
    time: z.literal(true).optional(),
  })
  .strict()

export const DiscordEventAttendeeSumAggregateInputObjectSchema = Schema
