import { z } from 'zod'
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema'
import { GuildCreateWithoutEventScheduleInputObjectSchema } from './GuildCreateWithoutEventScheduleInput.schema'
import { GuildUncheckedCreateWithoutEventScheduleInputObjectSchema } from './GuildUncheckedCreateWithoutEventScheduleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.GuildCreateOrConnectWithoutEventScheduleInput> =
  z
    .object({
      where: z.lazy(() => GuildWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => GuildCreateWithoutEventScheduleInputObjectSchema),
        z.lazy(() => GuildUncheckedCreateWithoutEventScheduleInputObjectSchema),
      ]),
    })
    .strict()

export const GuildCreateOrConnectWithoutEventScheduleInputObjectSchema = Schema