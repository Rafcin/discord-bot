import { z } from 'zod'
import { DiscordEventCreateNestedOneWithoutAttendeesInputObjectSchema } from './DiscordEventCreateNestedOneWithoutAttendeesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCreateWithoutMemberInput> = z
  .object({
    event: z.lazy(
      () => DiscordEventCreateNestedOneWithoutAttendeesInputObjectSchema
    ),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    time: z.number(),
  })
  .strict()

export const DiscordEventAttendeeCreateWithoutMemberInputObjectSchema = Schema
