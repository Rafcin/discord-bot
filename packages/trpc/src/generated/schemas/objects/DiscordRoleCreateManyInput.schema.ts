import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleCreateManyInput> = z
  .object({
    id: z.string(),
  })
  .strict()

export const DiscordRoleCreateManyInputObjectSchema = Schema
