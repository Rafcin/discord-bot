import { z } from 'zod'
import { QuestionTagCountOutputTypeSelectObjectSchema } from './QuestionTagCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.QuestionTagCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => QuestionTagCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict()

export const QuestionTagCountOutputTypeArgsObjectSchema = Schema
