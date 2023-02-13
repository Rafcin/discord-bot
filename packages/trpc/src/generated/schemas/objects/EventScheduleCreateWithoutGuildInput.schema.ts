import { z } from 'zod'
import { DiscordUserCreateNestedOneWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserCreateNestedOneWithoutCreatedSchedulesInput.schema'
import { DiscordEventCreateNestedManyWithoutScheduleInputObjectSchema } from './DiscordEventCreateNestedManyWithoutScheduleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateWithoutGuildInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    createdBy: z.lazy(
      () => DiscordUserCreateNestedOneWithoutCreatedSchedulesInputObjectSchema
    ),
    event: z
      .lazy(() => DiscordEventCreateNestedManyWithoutScheduleInputObjectSchema)
      .optional(),
    schedule: z.string(),
  })
  .strict()

export const EventScheduleCreateWithoutGuildInputObjectSchema = Schema
