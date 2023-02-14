import { z } from 'zod'
import { QuestionUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './QuestionUncheckedCreateNestedManyWithoutTagsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.QuestionTagUncheckedCreateInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    questions: z
      .lazy(() => QuestionUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
      .optional(),
  })
  .strict()

export const QuestionTagUncheckedCreateInputObjectSchema = Schema
