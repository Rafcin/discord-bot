import { z } from 'zod'
import { ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInputObjectSchema } from './ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordRoleUncheckedCreateWithoutRoleInput> = z
  .object({
    id: z.string(),
    participation: z
      .lazy(
        () =>
          ParticipationUncheckedCreateNestedManyWithoutParticipantRolesInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordRoleUncheckedCreateWithoutRoleInputObjectSchema = Schema
