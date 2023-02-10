import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeEventIdMemberIdCompoundUniqueInput> =
  z
    .object({
      eventId: z.string(),
      memberId: z.string(),
    })
    .strict()

export const DiscordEventAttendeeEventIdMemberIdCompoundUniqueInputObjectSchema =
  Schema