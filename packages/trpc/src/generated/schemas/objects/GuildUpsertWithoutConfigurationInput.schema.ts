import { z } from 'zod'
import { GuildUpdateWithoutConfigurationInputObjectSchema } from './GuildUpdateWithoutConfigurationInput.schema'
import { GuildUncheckedUpdateWithoutConfigurationInputObjectSchema } from './GuildUncheckedUpdateWithoutConfigurationInput.schema'
import { GuildCreateWithoutConfigurationInputObjectSchema } from './GuildCreateWithoutConfigurationInput.schema'
import { GuildUncheckedCreateWithoutConfigurationInputObjectSchema } from './GuildUncheckedCreateWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.GuildUpsertWithoutConfigurationInput> = z
  .object({
    update: z.union([
      z.lazy(() => GuildUpdateWithoutConfigurationInputObjectSchema),
      z.lazy(() => GuildUncheckedUpdateWithoutConfigurationInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GuildCreateWithoutConfigurationInputObjectSchema),
      z.lazy(() => GuildUncheckedCreateWithoutConfigurationInputObjectSchema),
    ]),
  })
  .strict()

export const GuildUpsertWithoutConfigurationInputObjectSchema = Schema
