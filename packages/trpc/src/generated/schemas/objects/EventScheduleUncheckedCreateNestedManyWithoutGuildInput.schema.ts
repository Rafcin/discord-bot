import { z } from 'zod'
import { EventScheduleCreateWithoutGuildInputObjectSchema } from './EventScheduleCreateWithoutGuildInput.schema'
import { EventScheduleUncheckedCreateWithoutGuildInputObjectSchema } from './EventScheduleUncheckedCreateWithoutGuildInput.schema'
import { EventScheduleCreateOrConnectWithoutGuildInputObjectSchema } from './EventScheduleCreateOrConnectWithoutGuildInput.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.EventScheduleUncheckedCreateNestedManyWithoutGuildInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EventScheduleCreateWithoutGuildInputObjectSchema),
          z
            .lazy(() => EventScheduleCreateWithoutGuildInputObjectSchema)
            .array(),
          z.lazy(
            () => EventScheduleUncheckedCreateWithoutGuildInputObjectSchema
          ),
          z
            .lazy(
              () => EventScheduleUncheckedCreateWithoutGuildInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EventScheduleCreateOrConnectWithoutGuildInputObjectSchema
          ),
          z
            .lazy(
              () => EventScheduleCreateOrConnectWithoutGuildInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => EventScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const EventScheduleUncheckedCreateNestedManyWithoutGuildInputObjectSchema =
  Schema
