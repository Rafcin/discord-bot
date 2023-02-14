import { z } from 'zod'
import { AccessLevelRoleFindManySchema } from '../findManyAccessLevelRole.schema'
import { AccessLevelCountOutputTypeArgsObjectSchema } from './AccessLevelCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelInclude> = z
  .object({
    role: z
      .union([z.boolean(), z.lazy(() => AccessLevelRoleFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => AccessLevelCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AccessLevelIncludeObjectSchema = Schema