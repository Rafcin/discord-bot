import { z } from 'zod'
import { AccessLevelWhereInputObjectSchema } from './AccessLevelWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRelationFilter> = z
  .object({
    is: z.lazy(() => AccessLevelWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => AccessLevelWhereInputObjectSchema).optional(),
  })
  .strict()

export const AccessLevelRelationFilterObjectSchema = Schema
