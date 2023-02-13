import { z } from 'zod'
import { QuestionCreateWithoutTagsInputObjectSchema } from './QuestionCreateWithoutTagsInput.schema'
import { QuestionUncheckedCreateWithoutTagsInputObjectSchema } from './QuestionUncheckedCreateWithoutTagsInput.schema'
import { QuestionCreateOrConnectWithoutTagsInputObjectSchema } from './QuestionCreateOrConnectWithoutTagsInput.schema'
import { QuestionUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from './QuestionUpsertWithWhereUniqueWithoutTagsInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from './QuestionUpdateWithWhereUniqueWithoutTagsInput.schema'
import { QuestionUpdateManyWithWhereWithoutTagsInputObjectSchema } from './QuestionUpdateManyWithWhereWithoutTagsInput.schema'
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutTagsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutTagsInputObjectSchema),
          z.lazy(() => QuestionCreateWithoutTagsInputObjectSchema).array(),
          z.lazy(() => QuestionUncheckedCreateWithoutTagsInputObjectSchema),
          z
            .lazy(() => QuestionUncheckedCreateWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => QuestionCreateOrConnectWithoutTagsInputObjectSchema),
          z
            .lazy(() => QuestionCreateOrConnectWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => QuestionUpsertWithWhereUniqueWithoutTagsInputObjectSchema
          ),
          z
            .lazy(
              () => QuestionUpsertWithWhereUniqueWithoutTagsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => QuestionUpdateWithWhereUniqueWithoutTagsInputObjectSchema
          ),
          z
            .lazy(
              () => QuestionUpdateWithWhereUniqueWithoutTagsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => QuestionUpdateManyWithWhereWithoutTagsInputObjectSchema),
          z
            .lazy(() => QuestionUpdateManyWithWhereWithoutTagsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => QuestionScalarWhereInputObjectSchema),
          z.lazy(() => QuestionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const QuestionUncheckedUpdateManyWithoutTagsNestedInputObjectSchema =
  Schema
