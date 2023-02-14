import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleUncheckedCreateWithoutAccessLevelInput> =
  z
    .object({
      id: z.string().optional(),
      configurationId: z.string().optional().nullable(),
      discordRoleId: z.string(),
    })
    .strict()

export const AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema =
  Schema
