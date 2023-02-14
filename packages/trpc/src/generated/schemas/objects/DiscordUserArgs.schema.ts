import { z } from 'zod'
import { DiscordUserSelectObjectSchema } from './DiscordUserSelect.schema'
import { DiscordUserIncludeObjectSchema } from './DiscordUserInclude.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserArgs> = z
  .object({
    select: z.lazy(() => DiscordUserSelectObjectSchema).optional(),
    include: z.lazy(() => DiscordUserIncludeObjectSchema).optional(),
  })
  .strict()

export const DiscordUserArgsObjectSchema = Schema
