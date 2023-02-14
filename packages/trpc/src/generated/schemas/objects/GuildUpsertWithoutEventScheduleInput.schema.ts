import { z } from 'zod'
import { GuildUpdateWithoutEventScheduleInputObjectSchema } from './GuildUpdateWithoutEventScheduleInput.schema'
import { GuildUncheckedUpdateWithoutEventScheduleInputObjectSchema } from './GuildUncheckedUpdateWithoutEventScheduleInput.schema'
import { GuildCreateWithoutEventScheduleInputObjectSchema } from './GuildCreateWithoutEventScheduleInput.schema'
import { GuildUncheckedCreateWithoutEventScheduleInputObjectSchema } from './GuildUncheckedCreateWithoutEventScheduleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GuildUpsertWithoutEventScheduleInput> = z
  .object({
    update: z.union([
      z.lazy(() => GuildUpdateWithoutEventScheduleInputObjectSchema),
      z.lazy(() => GuildUncheckedUpdateWithoutEventScheduleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GuildCreateWithoutEventScheduleInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutEventScheduleInputObjectSchema),
    ]),
  })
  .strict()

export const GuildUpsertWithoutEventScheduleInputObjectSchema = Schema
