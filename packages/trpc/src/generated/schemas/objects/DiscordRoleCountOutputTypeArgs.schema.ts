import { z } from 'zod'
import { DiscordRoleCountOutputTypeSelectObjectSchema } from './DiscordRoleCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => DiscordRoleCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordRoleCountOutputTypeArgsObjectSchema = Schema