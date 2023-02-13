import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUncheckedCreateWithoutMemberInput> =
  z
    .object({
      eventId: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      time: z.number(),
    })
    .strict()

export const DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema =
  Schema
