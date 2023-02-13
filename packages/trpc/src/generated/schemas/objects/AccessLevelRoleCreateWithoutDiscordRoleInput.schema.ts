import { z } from 'zod'
import { AccessLevelCreateNestedOneWithoutRoleInputObjectSchema } from './AccessLevelCreateNestedOneWithoutRoleInput.schema'
import { ConfigurationCreateNestedOneWithoutRolesInputObjectSchema } from './ConfigurationCreateNestedOneWithoutRolesInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateWithoutDiscordRoleInput> = z
  .object({
    id: z.string().optional(),
    accessLevel: z.lazy(
      () => AccessLevelCreateNestedOneWithoutRoleInputObjectSchema
    ),
    Configuration: z
      .lazy(() => ConfigurationCreateNestedOneWithoutRolesInputObjectSchema)
      .optional(),
  })
  .strict()

export const AccessLevelRoleCreateWithoutDiscordRoleInputObjectSchema = Schema
