import { z } from 'zod'
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema'
import { AnswerUpdateManyMutationInputObjectSchema } from './AnswerUpdateManyMutationInput.schema'
import { AnswerUncheckedUpdateManyWithoutAnswersInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutAnswersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnswerUpdateManyWithWhereWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => AnswerScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => AnswerUpdateManyMutationInputObjectSchema),
      z.lazy(() => AnswerUncheckedUpdateManyWithoutAnswersInputObjectSchema),
    ]),
  })
  .strict()

export const AnswerUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema
