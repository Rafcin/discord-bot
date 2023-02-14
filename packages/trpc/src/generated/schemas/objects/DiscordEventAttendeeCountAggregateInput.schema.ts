import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCountAggregateInputType> = z
  .object({
    eventId: z.literal(true).optional(),
    memberId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    time: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const DiscordEventAttendeeCountAggregateInputObjectSchema = Schema