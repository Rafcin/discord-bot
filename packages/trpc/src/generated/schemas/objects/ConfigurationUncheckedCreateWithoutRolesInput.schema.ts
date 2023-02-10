import { z } from 'zod'
import { ConfigurationFeatureUncheckedCreateNestedManyWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUncheckedCreateNestedManyWithoutConfigurationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationUncheckedCreateWithoutRolesInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      name: z.string(),
      githubOrganization: z.string().optional().nullable(),
      features: z
        .lazy(
          () =>
            ConfigurationFeatureUncheckedCreateNestedManyWithoutConfigurationInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const ConfigurationUncheckedCreateWithoutRolesInputObjectSchema = Schema
