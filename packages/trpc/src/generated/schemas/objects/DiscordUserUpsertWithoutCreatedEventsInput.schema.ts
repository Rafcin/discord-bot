import { z } from 'zod'
import { DiscordUserUpdateWithoutCreatedEventsInputObjectSchema } from './DiscordUserUpdateWithoutCreatedEventsInput.schema'
import { DiscordUserUncheckedUpdateWithoutCreatedEventsInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutCreatedEventsInput.schema'
import { DiscordUserCreateWithoutCreatedEventsInputObjectSchema } from './DiscordUserCreateWithoutCreatedEventsInput.schema'
import { DiscordUserUncheckedCreateWithoutCreatedEventsInputObjectSchema } from './DiscordUserUncheckedCreateWithoutCreatedEventsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpsertWithoutCreatedEventsInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiscordUserUpdateWithoutCreatedEventsInputObjectSchema),
      z.lazy(
        () => DiscordUserUncheckedUpdateWithoutCreatedEventsInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => DiscordUserCreateWithoutCreatedEventsInputObjectSchema),
      z.lazy(
        () => DiscordUserUncheckedCreateWithoutCreatedEventsInputObjectSchema
      ),
    ]),
  })
  .strict()

export const DiscordUserUpsertWithoutCreatedEventsInputObjectSchema = Schema
