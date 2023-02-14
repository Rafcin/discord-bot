import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.EventScheduleUncheckedCreateWithoutEventInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      guildId: z.string(),
      createdById: z.string(),
      schedule: z.string(),
    })
    .strict()

export const EventScheduleUncheckedCreateWithoutEventInputObjectSchema = Schema