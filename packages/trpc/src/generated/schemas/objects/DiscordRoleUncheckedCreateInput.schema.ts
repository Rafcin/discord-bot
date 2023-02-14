import { z } from 'zod'
import { ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInputObjectSchema } from './ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInput.schema'
import { AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordRoleUncheckedCreateInput> = z
  .object({
    id: z.string(),
    participation: z
      .lazy(
        () =>
          ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInputObjectSchema
      )
      .optional(),
    role: z
      .lazy(
        () =>
          AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordRoleUncheckedCreateInputObjectSchema = Schema
