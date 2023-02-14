import { z } from 'zod'
import { AccessLevelRoleUncheckedCreateNestedManyWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUncheckedCreateNestedManyWithoutAccessLevelInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelUncheckedCreateInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    role: z
      .lazy(
        () =>
          AccessLevelRoleUncheckedCreateNestedManyWithoutAccessLevelInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AccessLevelUncheckedCreateInputObjectSchema = Schema
