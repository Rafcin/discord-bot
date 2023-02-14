import { z } from 'zod'
import { DiscordRoleSelectObjectSchema } from './DiscordRoleSelect.schema'
import { DiscordRoleIncludeObjectSchema } from './DiscordRoleInclude.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordRoleArgs> = z
  .object({
    select: z.lazy(() => DiscordRoleSelectObjectSchema).optional(),
    include: z.lazy(() => DiscordRoleIncludeObjectSchema).optional(),
  })
  .strict()

export const DiscordRoleArgsObjectSchema = Schema
