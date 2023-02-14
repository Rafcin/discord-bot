import { z } from 'zod'
import { DiscordUserUpdateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserUpdateWithoutCreatedSchedulesInput.schema'
import { DiscordUserUncheckedUpdateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutCreatedSchedulesInput.schema'
import { DiscordUserCreateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserCreateWithoutCreatedSchedulesInput.schema'
import { DiscordUserUncheckedCreateWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserUncheckedCreateWithoutCreatedSchedulesInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserUpsertWithoutCreatedSchedulesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => DiscordUserUpdateWithoutCreatedSchedulesInputObjectSchema),
        z.lazy(
          () =>
            DiscordUserUncheckedUpdateWithoutCreatedSchedulesInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => DiscordUserCreateWithoutCreatedSchedulesInputObjectSchema),
        z.lazy(
          () =>
            DiscordUserUncheckedCreateWithoutCreatedSchedulesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordUserUpsertWithoutCreatedSchedulesInputObjectSchema = Schema