import { z } from 'zod'
import { DiscordUserCreateNestedOneWithoutAttendedInputObjectSchema } from './DiscordUserCreateNestedOneWithoutAttendedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCreateWithoutEventInput> = z
  .object({
    member: z.lazy(
      () => DiscordUserCreateNestedOneWithoutAttendedInputObjectSchema
    ),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    time: z.number(),
  })
  .strict()

export const DiscordEventAttendeeCreateWithoutEventInputObjectSchema = Schema
