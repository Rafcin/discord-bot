import { z } from 'zod'
import { QuestionCreateWithoutGuildInputObjectSchema } from './QuestionCreateWithoutGuildInput.schema'
import { QuestionUncheckedCreateWithoutGuildInputObjectSchema } from './QuestionUncheckedCreateWithoutGuildInput.schema'
import { QuestionCreateOrConnectWithoutGuildInputObjectSchema } from './QuestionCreateOrConnectWithoutGuildInput.schema'
import { QuestionCreateManyGuildInputEnvelopeObjectSchema } from './QuestionCreateManyGuildInputEnvelope.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutGuildInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutGuildInputObjectSchema),
          z.lazy(() => QuestionCreateWithoutGuildInputObjectSchema).array(),
          z.lazy(() => QuestionUncheckedCreateWithoutGuildInputObjectSchema),
          z
            .lazy(() => QuestionUncheckedCreateWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => QuestionCreateOrConnectWithoutGuildInputObjectSchema),
          z
            .lazy(() => QuestionCreateOrConnectWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionCreateManyGuildInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const QuestionUncheckedCreateNestedManyWithoutGuildInputObjectSchema =
  Schema