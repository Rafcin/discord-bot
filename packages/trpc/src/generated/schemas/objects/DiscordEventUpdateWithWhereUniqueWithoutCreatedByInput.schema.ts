import { z } from 'zod'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventUpdateWithoutCreatedByInputObjectSchema } from './DiscordEventUpdateWithoutCreatedByInput.schema'
import { DiscordEventUncheckedUpdateWithoutCreatedByInputObjectSchema } from './DiscordEventUncheckedUpdateWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventUpdateWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordEventUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () => DiscordEventUncheckedUpdateWithoutCreatedByInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema
