import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCountOutputTypeSelect> = z
  .object({
    attendees: z.boolean().optional(),
  })
  .strict()

export const DiscordEventCountOutputTypeSelectObjectSchema = Schema