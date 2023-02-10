import { z } from 'zod'
import { DiscordEventWhereInputObjectSchema } from './DiscordEventWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventRelationFilter> = z
  .object({
    is: z.lazy(() => DiscordEventWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => DiscordEventWhereInputObjectSchema).optional(),
  })
  .strict()

export const DiscordEventRelationFilterObjectSchema = Schema
