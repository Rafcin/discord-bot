import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    imageUrl: z.literal(true).optional(),
    location: z.literal(true).optional(),
    start: z.literal(true).optional(),
    createdById: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    scheduleId: z.literal(true).optional(),
    eventScheduleId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const DiscordEventCountAggregateInputObjectSchema = Schema
