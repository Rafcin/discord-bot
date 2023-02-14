import { z } from 'zod'
import { AccessLevelRoleCreateNestedManyWithoutConfigurationInputObjectSchema } from './AccessLevelRoleCreateNestedManyWithoutConfigurationInput.schema'
import { GuildCreateNestedOneWithoutConfigurationInputObjectSchema } from './GuildCreateNestedOneWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationCreateWithoutFeaturesInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    name: z.string(),
    roles: z
      .lazy(
        () =>
          AccessLevelRoleCreateNestedManyWithoutConfigurationInputObjectSchema
      )
      .optional(),
    githubOrganization: z.string().optional().nullable(),
    guild: z.lazy(
      () => GuildCreateNestedOneWithoutConfigurationInputObjectSchema
    ),
  })
  .strict()

export const ConfigurationCreateWithoutFeaturesInputObjectSchema = Schema
