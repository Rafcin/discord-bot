import { z } from 'zod'
import { AnswerCreateNestedOneWithoutQuestionInputObjectSchema } from './AnswerCreateNestedOneWithoutQuestionInput.schema'
import { GuildCreateNestedOneWithoutQuestionsInputObjectSchema } from './GuildCreateNestedOneWithoutQuestionsInput.schema'
import { ParticipationCreateNestedManyWithoutQuestionInputObjectSchema } from './ParticipationCreateNestedManyWithoutQuestionInput.schema'
import { QuestionTagCreateNestedOneWithoutQuestionsInputObjectSchema } from './QuestionTagCreateNestedOneWithoutQuestionsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.QuestionCreateWithoutGithubDiscussionInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    threadId: z.string(),
    ownerId: z.string(),
    channelName: z.string(),
    threadMetaUpdatedAt: z.date().optional(),
    title: z.string(),
    isSolved: z.boolean().optional(),
    url: z.string().optional().nullable(),
    answer: z
      .lazy(() => AnswerCreateNestedOneWithoutQuestionInputObjectSchema)
      .optional(),
    guild: z.lazy(() => GuildCreateNestedOneWithoutQuestionsInputObjectSchema),
    participation: z
      .lazy(() => ParticipationCreateNestedManyWithoutQuestionInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => QuestionTagCreateNestedOneWithoutQuestionsInputObjectSchema)
      .optional(),
  })
  .strict()

export const QuestionCreateWithoutGithubDiscussionInputObjectSchema = Schema
