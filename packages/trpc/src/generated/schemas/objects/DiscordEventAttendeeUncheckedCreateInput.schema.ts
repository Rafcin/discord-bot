import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUncheckedCreateInput> = z
  .object({
    eventId: z.string(),
    memberId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    time: z.number(),
  })
  .strict()

export const DiscordEventAttendeeUncheckedCreateInputObjectSchema = Schema