import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.QuestionTagUncheckedCreateWithoutQuestionsInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .strict()

export const QuestionTagUncheckedCreateWithoutQuestionsInputObjectSchema =
  Schema