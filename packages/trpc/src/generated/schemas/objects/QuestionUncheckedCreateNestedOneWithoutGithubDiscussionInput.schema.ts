import { z } from 'zod'
import { QuestionCreateWithoutGithubDiscussionInputObjectSchema } from './QuestionCreateWithoutGithubDiscussionInput.schema'
import { QuestionUncheckedCreateWithoutGithubDiscussionInputObjectSchema } from './QuestionUncheckedCreateWithoutGithubDiscussionInput.schema'
import { QuestionCreateOrConnectWithoutGithubDiscussionInputObjectSchema } from './QuestionCreateOrConnectWithoutGithubDiscussionInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateNestedOneWithoutGithubDiscussionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutGithubDiscussionInputObjectSchema),
          z.lazy(
            () =>
              QuestionUncheckedCreateWithoutGithubDiscussionInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => QuestionCreateOrConnectWithoutGithubDiscussionInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const QuestionUncheckedCreateNestedOneWithoutGithubDiscussionInputObjectSchema =
  Schema