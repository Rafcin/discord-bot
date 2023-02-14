import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { QuestionUncheckedUpdateOneWithoutGithubDiscussionNestedInputObjectSchema } from './QuestionUncheckedUpdateOneWithoutGithubDiscussionNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GitHubDiscussionUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    url: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Question: z
      .lazy(
        () =>
          QuestionUncheckedUpdateOneWithoutGithubDiscussionNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const GitHubDiscussionUncheckedUpdateInputObjectSchema = Schema