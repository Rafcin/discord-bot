import { z } from 'zod'
import { ConfigurationUpdateWithoutGuildInputObjectSchema } from './ConfigurationUpdateWithoutGuildInput.schema'
import { ConfigurationUncheckedUpdateWithoutGuildInputObjectSchema } from './ConfigurationUncheckedUpdateWithoutGuildInput.schema'
import { ConfigurationCreateWithoutGuildInputObjectSchema } from './ConfigurationCreateWithoutGuildInput.schema'
import { ConfigurationUncheckedCreateWithoutGuildInputObjectSchema } from './ConfigurationUncheckedCreateWithoutGuildInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationUpsertWithoutGuildInput> = z
  .object({
    update: z.union([
      z.lazy(() => ConfigurationUpdateWithoutGuildInputObjectSchema),
      z.lazy(() => ConfigurationUncheckedUpdateWithoutGuildInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ConfigurationCreateWithoutGuildInputObjectSchema),
      z.lazy(() => ConfigurationUncheckedCreateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict()

export const ConfigurationUpsertWithoutGuildInputObjectSchema = Schema
