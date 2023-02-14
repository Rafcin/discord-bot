import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleUncheckedCreateWithoutDiscordRoleInput> =
  z
    .object({
      id: z.string().optional(),
      accessLevelId: z.string(),
      configurationId: z.string().optional().nullable(),
    })
    .strict()

export const AccessLevelRoleUncheckedCreateWithoutDiscordRoleInputObjectSchema =
  Schema
