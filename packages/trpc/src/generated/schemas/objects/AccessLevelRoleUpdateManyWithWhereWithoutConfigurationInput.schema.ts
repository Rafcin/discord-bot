import { z } from 'zod'
import { AccessLevelRoleScalarWhereInputObjectSchema } from './AccessLevelRoleScalarWhereInput.schema'
import { AccessLevelRoleUpdateManyMutationInputObjectSchema } from './AccessLevelRoleUpdateManyMutationInput.schema'
import { AccessLevelRoleUncheckedUpdateManyWithoutRolesInputObjectSchema } from './AccessLevelRoleUncheckedUpdateManyWithoutRolesInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpdateManyWithWhereWithoutConfigurationInput> =
  z
    .object({
      where: z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AccessLevelRoleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedUpdateManyWithoutRolesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const AccessLevelRoleUpdateManyWithWhereWithoutConfigurationInputObjectSchema =
  Schema
