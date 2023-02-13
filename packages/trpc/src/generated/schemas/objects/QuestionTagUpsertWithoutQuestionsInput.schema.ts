import { z } from 'zod'
import { QuestionTagUpdateWithoutQuestionsInputObjectSchema } from './QuestionTagUpdateWithoutQuestionsInput.schema'
import { QuestionTagUncheckedUpdateWithoutQuestionsInputObjectSchema } from './QuestionTagUncheckedUpdateWithoutQuestionsInput.schema'
import { QuestionTagCreateWithoutQuestionsInputObjectSchema } from './QuestionTagCreateWithoutQuestionsInput.schema'
import { QuestionTagUncheckedCreateWithoutQuestionsInputObjectSchema } from './QuestionTagUncheckedCreateWithoutQuestionsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.QuestionTagUpsertWithoutQuestionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionTagUpdateWithoutQuestionsInputObjectSchema),
      z.lazy(() => QuestionTagUncheckedUpdateWithoutQuestionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionTagCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => QuestionTagUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionTagUpsertWithoutQuestionsInputObjectSchema = Schema
