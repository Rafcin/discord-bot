import { z } from 'zod'
import { AccessLevelRoleCreateNestedManyWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleCreateNestedManyWithoutAccessLevelInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelCreateInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    role: z
      .lazy(
        () => AccessLevelRoleCreateNestedManyWithoutAccessLevelInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AccessLevelCreateInputObjectSchema = Schema
