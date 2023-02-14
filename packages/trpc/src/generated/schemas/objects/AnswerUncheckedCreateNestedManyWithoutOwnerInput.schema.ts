import { z } from 'zod'
import { AnswerCreateWithoutOwnerInputObjectSchema } from './AnswerCreateWithoutOwnerInput.schema'
import { AnswerUncheckedCreateWithoutOwnerInputObjectSchema } from './AnswerUncheckedCreateWithoutOwnerInput.schema'
import { AnswerCreateOrConnectWithoutOwnerInputObjectSchema } from './AnswerCreateOrConnectWithoutOwnerInput.schema'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AnswerUncheckedCreateNestedManyWithoutOwnerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AnswerCreateWithoutOwnerInputObjectSchema),
          z.lazy(() => AnswerCreateWithoutOwnerInputObjectSchema).array(),
          z.lazy(() => AnswerUncheckedCreateWithoutOwnerInputObjectSchema),
          z
            .lazy(() => AnswerUncheckedCreateWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AnswerCreateOrConnectWithoutOwnerInputObjectSchema),
          z
            .lazy(() => AnswerCreateOrConnectWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AnswerWhereUniqueInputObjectSchema),
          z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const AnswerUncheckedCreateNestedManyWithoutOwnerInputObjectSchema =
  Schema
