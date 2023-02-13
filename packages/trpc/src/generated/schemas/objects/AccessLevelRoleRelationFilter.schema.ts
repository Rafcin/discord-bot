import { z } from 'zod'
import { AccessLevelRoleWhereInputObjectSchema } from './AccessLevelRoleWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleRelationFilter> = z
  .object({
    is: z
      .lazy(() => AccessLevelRoleWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AccessLevelRoleWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const AccessLevelRoleRelationFilterObjectSchema = Schema
