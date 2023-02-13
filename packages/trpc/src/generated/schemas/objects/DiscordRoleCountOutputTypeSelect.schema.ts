import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordRoleCountOutputTypeSelect> = z
  .object({
    participation: z.boolean().optional(),
  })
  .strict()

export const DiscordRoleCountOutputTypeSelectObjectSchema = Schema
