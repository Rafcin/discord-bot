import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { QuestionUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutTagsNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.QuestionTagUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    questions: z
      .lazy(() => QuestionUncheckedUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const QuestionTagUncheckedUpdateInputObjectSchema = Schema
