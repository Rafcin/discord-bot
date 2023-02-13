import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AccessLevelUncheckedCreateWithoutRoleInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
  })
  .strict()

export const AccessLevelUncheckedCreateWithoutRoleInputObjectSchema = Schema
