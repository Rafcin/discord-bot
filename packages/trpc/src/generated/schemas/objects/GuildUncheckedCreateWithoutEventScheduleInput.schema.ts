import { z } from 'zod'
import { ConfigurationUncheckedCreateNestedOneWithoutGuildInputObjectSchema } from './ConfigurationUncheckedCreateNestedOneWithoutGuildInput.schema'
import { QuestionUncheckedCreateNestedManyWithoutGuildInputObjectSchema } from './QuestionUncheckedCreateNestedManyWithoutGuildInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GuildUncheckedCreateWithoutEventScheduleInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      configuration: z
        .lazy(
          () =>
            ConfigurationUncheckedCreateNestedOneWithoutGuildInputObjectSchema
        )
        .optional(),
      questions: z
        .lazy(
          () => QuestionUncheckedCreateNestedManyWithoutGuildInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const GuildUncheckedCreateWithoutEventScheduleInputObjectSchema = Schema
