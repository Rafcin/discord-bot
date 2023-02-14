import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GuildWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const GuildWhereUniqueInputObjectSchema = Schema
