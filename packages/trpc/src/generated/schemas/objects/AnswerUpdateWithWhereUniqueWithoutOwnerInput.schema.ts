import { z } from 'zod'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'
import { AnswerUpdateWithoutOwnerInputObjectSchema } from './AnswerUpdateWithoutOwnerInput.schema'
import { AnswerUncheckedUpdateWithoutOwnerInputObjectSchema } from './AnswerUncheckedUpdateWithoutOwnerInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AnswerUpdateWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AnswerUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => AnswerUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict()

export const AnswerUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = Schema
