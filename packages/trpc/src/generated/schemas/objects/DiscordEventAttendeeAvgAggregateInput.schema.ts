import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeAvgAggregateInputType> = z
  .object({
    time: z.literal(true).optional(),
  })
  .strict()

export const DiscordEventAttendeeAvgAggregateInputObjectSchema = Schema
