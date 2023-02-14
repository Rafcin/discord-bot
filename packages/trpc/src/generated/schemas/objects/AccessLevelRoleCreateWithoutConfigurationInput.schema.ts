import { z } from 'zod'
import { AccessLevelCreateNestedOneWithoutRoleInputObjectSchema } from './AccessLevelCreateNestedOneWithoutRoleInput.schema'
import { DiscordRoleCreateNestedOneWithoutRoleInputObjectSchema } from './DiscordRoleCreateNestedOneWithoutRoleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateWithoutConfigurationInput> =
  z
    .object({
      id: z.string().optional(),
      accessLevel: z.lazy(
        () => AccessLevelCreateNestedOneWithoutRoleInputObjectSchema
      ),
      discordRole: z.lazy(
        () => DiscordRoleCreateNestedOneWithoutRoleInputObjectSchema
      ),
    })
    .strict()

export const AccessLevelRoleCreateWithoutConfigurationInputObjectSchema = Schema
