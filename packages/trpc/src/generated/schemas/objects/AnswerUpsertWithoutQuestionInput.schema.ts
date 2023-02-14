import { z } from 'zod'
import { AnswerUpdateWithoutQuestionInputObjectSchema } from './AnswerUpdateWithoutQuestionInput.schema'
import { AnswerUncheckedUpdateWithoutQuestionInputObjectSchema } from './AnswerUncheckedUpdateWithoutQuestionInput.schema'
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema'
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AnswerUpsertWithoutQuestionInput> = z
  .object({
    update: z.union([
      z.lazy(() => AnswerUpdateWithoutQuestionInputObjectSchema),
      z.lazy(() => AnswerUncheckedUpdateWithoutQuestionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema),
    ]),
  })
  .strict()

export const AnswerUpsertWithoutQuestionInputObjectSchema = Schema
