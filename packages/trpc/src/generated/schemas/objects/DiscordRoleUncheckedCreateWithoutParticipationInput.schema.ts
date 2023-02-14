import { z } from 'zod'
import { AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordRoleUncheckedCreateWithoutParticipationInput> =
  z
    .object({
      id: z.string(),
      role: z
        .lazy(
          () =>
            AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const DiscordRoleUncheckedCreateWithoutParticipationInputObjectSchema =
  Schema
