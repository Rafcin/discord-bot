import { z } from 'zod'
import { ConfigurationUncheckedCreateNestedOneWithoutGuildInputObjectSchema } from './ConfigurationUncheckedCreateNestedOneWithoutGuildInput.schema'
import { EventScheduleUncheckedCreateNestedManyWithoutGuildInputObjectSchema } from './EventScheduleUncheckedCreateNestedManyWithoutGuildInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GuildUncheckedCreateWithoutQuestionsInput> = z
  .object({
    id: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    configuration: z
      .lazy(
        () => ConfigurationUncheckedCreateNestedOneWithoutGuildInputObjectSchema
      )
      .optional(),
    EventSchedule: z
      .lazy(
        () =>
          EventScheduleUncheckedCreateNestedManyWithoutGuildInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const GuildUncheckedCreateWithoutQuestionsInputObjectSchema = Schema
