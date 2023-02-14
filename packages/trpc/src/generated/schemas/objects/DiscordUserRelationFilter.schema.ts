import { z } from 'zod'
import { DiscordUserWhereInputObjectSchema } from './DiscordUserWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserRelationFilter> = z
  .object({
    is: z
      .lazy(() => DiscordUserWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DiscordUserWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const DiscordUserRelationFilterObjectSchema = Schema
