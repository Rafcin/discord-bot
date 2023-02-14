import { z } from 'zod'
import { DiscordRoleScalarWhereInputObjectSchema } from './DiscordRoleScalarWhereInput.schema'
import { DiscordRoleUpdateManyMutationInputObjectSchema } from './DiscordRoleUpdateManyMutationInput.schema'
import { DiscordRoleUncheckedUpdateManyWithoutParticipantRolesInputObjectSchema } from './DiscordRoleUncheckedUpdateManyWithoutParticipantRolesInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordRoleUpdateManyWithWhereWithoutParticipationInput> =
  z
    .object({
      where: z.lazy(() => DiscordRoleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordRoleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DiscordRoleUncheckedUpdateManyWithoutParticipantRolesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordRoleUpdateManyWithWhereWithoutParticipationInputObjectSchema =
  Schema
