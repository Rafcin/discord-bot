import { z } from 'zod'
import { DiscordEventCountOutputTypeSelectObjectSchema } from './DiscordEventCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordEventCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => DiscordEventCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordEventCountOutputTypeArgsObjectSchema = Schema
