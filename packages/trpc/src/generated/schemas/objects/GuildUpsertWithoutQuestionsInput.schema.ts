import { z } from 'zod'
import { GuildUpdateWithoutQuestionsInputObjectSchema } from './GuildUpdateWithoutQuestionsInput.schema'
import { GuildUncheckedUpdateWithoutQuestionsInputObjectSchema } from './GuildUncheckedUpdateWithoutQuestionsInput.schema'
import { GuildCreateWithoutQuestionsInputObjectSchema } from './GuildCreateWithoutQuestionsInput.schema'
import { GuildUncheckedCreateWithoutQuestionsInputObjectSchema } from './GuildUncheckedCreateWithoutQuestionsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GuildUpsertWithoutQuestionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => GuildUpdateWithoutQuestionsInputObjectSchema),
      z.lazy(() => GuildUncheckedUpdateWithoutQuestionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GuildCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict()

export const GuildUpsertWithoutQuestionsInputObjectSchema = Schema
