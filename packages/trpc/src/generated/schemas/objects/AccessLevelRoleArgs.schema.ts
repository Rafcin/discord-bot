import { z } from 'zod'
import { AccessLevelRoleSelectObjectSchema } from './AccessLevelRoleSelect.schema'
import { AccessLevelRoleIncludeObjectSchema } from './AccessLevelRoleInclude.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleArgs> = z
  .object({
    select: z.lazy(() => AccessLevelRoleSelectObjectSchema).optional(),
    include: z.lazy(() => AccessLevelRoleIncludeObjectSchema).optional(),
  })
  .strict()

export const AccessLevelRoleArgsObjectSchema = Schema
