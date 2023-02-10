import { z } from 'zod'
import { DiscordEventUpdateWithoutAttendeesInputObjectSchema } from './DiscordEventUpdateWithoutAttendeesInput.schema'
import { DiscordEventUncheckedUpdateWithoutAttendeesInputObjectSchema } from './DiscordEventUncheckedUpdateWithoutAttendeesInput.schema'
import { DiscordEventCreateWithoutAttendeesInputObjectSchema } from './DiscordEventCreateWithoutAttendeesInput.schema'
import { DiscordEventUncheckedCreateWithoutAttendeesInputObjectSchema } from './DiscordEventUncheckedCreateWithoutAttendeesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUpsertWithoutAttendeesInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiscordEventUpdateWithoutAttendeesInputObjectSchema),
      z.lazy(
        () => DiscordEventUncheckedUpdateWithoutAttendeesInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => DiscordEventCreateWithoutAttendeesInputObjectSchema),
      z.lazy(
        () => DiscordEventUncheckedCreateWithoutAttendeesInputObjectSchema
      ),
    ]),
  })
  .strict()

export const DiscordEventUpsertWithoutAttendeesInputObjectSchema = Schema
