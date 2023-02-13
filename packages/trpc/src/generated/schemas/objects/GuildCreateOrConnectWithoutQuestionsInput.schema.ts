import { z } from 'zod'
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema'
import { GuildCreateWithoutQuestionsInputObjectSchema } from './GuildCreateWithoutQuestionsInput.schema'
import { GuildUncheckedCreateWithoutQuestionsInputObjectSchema } from './GuildUncheckedCreateWithoutQuestionsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.GuildCreateOrConnectWithoutQuestionsInput> = z
  .object({
    where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GuildCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict()

export const GuildCreateOrConnectWithoutQuestionsInputObjectSchema = Schema
