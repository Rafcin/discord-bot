import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    accountId: z.string().optional(),
  })
  .strict()

export const DiscordUserWhereUniqueInputObjectSchema = Schema
