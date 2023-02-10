import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCreateManyScheduleInput> = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    start: z.date(),
    createdById: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    eventScheduleId: z.string(),
  })
  .strict()

export const DiscordEventCreateManyScheduleInputObjectSchema = Schema
