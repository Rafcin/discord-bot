import { z } from 'zod'
import { GuildSelectObjectSchema } from './GuildSelect.schema'
import { GuildIncludeObjectSchema } from './GuildInclude.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GuildArgs> = z
  .object({
    select: z.lazy(() => GuildSelectObjectSchema).optional(),
    include: z.lazy(() => GuildIncludeObjectSchema).optional(),
  })
  .strict()

export const GuildArgsObjectSchema = Schema
