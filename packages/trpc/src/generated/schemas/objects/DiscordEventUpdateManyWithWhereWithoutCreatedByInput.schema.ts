import { z } from 'zod'
import { DiscordEventScalarWhereInputObjectSchema } from './DiscordEventScalarWhereInput.schema'
import { DiscordEventUpdateManyMutationInputObjectSchema } from './DiscordEventUpdateManyMutationInput.schema'
import { DiscordEventUncheckedUpdateManyWithoutCreatedEventsInputObjectSchema } from './DiscordEventUncheckedUpdateManyWithoutCreatedEventsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUpdateManyWithWhereWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordEventUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DiscordEventUncheckedUpdateManyWithoutCreatedEventsInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema
