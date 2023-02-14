import { z } from 'zod'
import { ParticipationCreateNestedManyWithoutParticipantRolesInputObjectSchema } from './ParticipationCreateNestedManyWithoutParticipantRolesInput.schema'
import { AccessLevelRoleCreateNestedOneWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleCreateNestedOneWithoutDiscordRoleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordRoleCreateInput> = z
  .object({
    id: z.string(),
    participation: z
      .lazy(
        () =>
          ParticipationCreateNestedManyWithoutParticipantRolesInputObjectSchema
      )
      .optional(),
    role: z
      .lazy(
        () => AccessLevelRoleCreateNestedOneWithoutDiscordRoleInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordRoleCreateInputObjectSchema = Schema
