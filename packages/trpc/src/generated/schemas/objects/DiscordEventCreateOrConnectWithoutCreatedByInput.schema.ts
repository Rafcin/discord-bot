import { z } from 'zod'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventCreateWithoutCreatedByInputObjectSchema } from './DiscordEventCreateWithoutCreatedByInput.schema'
import { DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './DiscordEventUncheckedCreateWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventCreateOrConnectWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiscordEventCreateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () => DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventCreateOrConnectWithoutCreatedByInputObjectSchema =
  Schema
