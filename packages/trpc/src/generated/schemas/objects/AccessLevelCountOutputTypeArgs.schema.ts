import { z } from 'zod'
import { AccessLevelCountOutputTypeSelectObjectSchema } from './AccessLevelCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => AccessLevelCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict()

export const AccessLevelCountOutputTypeArgsObjectSchema = Schema
