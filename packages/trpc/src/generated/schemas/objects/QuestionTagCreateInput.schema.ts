import { z } from 'zod'
import { QuestionCreateNestedManyWithoutTagsInputObjectSchema } from './QuestionCreateNestedManyWithoutTagsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagCreateInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    questions: z
      .lazy(() => QuestionCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict()

export const QuestionTagCreateInputObjectSchema = Schema
