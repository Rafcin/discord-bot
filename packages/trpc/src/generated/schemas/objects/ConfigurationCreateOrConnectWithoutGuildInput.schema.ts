import { z } from 'zod'
import { ConfigurationWhereUniqueInputObjectSchema } from './ConfigurationWhereUniqueInput.schema'
import { ConfigurationCreateWithoutGuildInputObjectSchema } from './ConfigurationCreateWithoutGuildInput.schema'
import { ConfigurationUncheckedCreateWithoutGuildInputObjectSchema } from './ConfigurationUncheckedCreateWithoutGuildInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationCreateOrConnectWithoutGuildInput> =
  z
    .object({
      where: z.lazy(() => ConfigurationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ConfigurationCreateWithoutGuildInputObjectSchema),
        z.lazy(() => ConfigurationUncheckedCreateWithoutGuildInputObjectSchema),
      ]),
    })
    .strict()

export const ConfigurationCreateOrConnectWithoutGuildInputObjectSchema = Schema
