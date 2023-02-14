import { z } from 'zod'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'
import { AnswerUpdateWithoutOwnerInputObjectSchema } from './AnswerUpdateWithoutOwnerInput.schema'
import { AnswerUncheckedUpdateWithoutOwnerInputObjectSchema } from './AnswerUncheckedUpdateWithoutOwnerInput.schema'
import { AnswerCreateWithoutOwnerInputObjectSchema } from './AnswerCreateWithoutOwnerInput.schema'
import { AnswerUncheckedCreateWithoutOwnerInputObjectSchema } from './AnswerUncheckedCreateWithoutOwnerInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AnswerUpsertWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AnswerUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => AnswerUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict()

export const AnswerUpsertWithWhereUniqueWithoutOwnerInputObjectSchema = Schema
