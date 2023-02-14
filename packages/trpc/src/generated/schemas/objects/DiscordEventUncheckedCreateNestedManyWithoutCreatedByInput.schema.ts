import { z } from 'zod'
import { DiscordEventCreateWithoutCreatedByInputObjectSchema } from './DiscordEventCreateWithoutCreatedByInput.schema'
import { DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema } from './DiscordEventUncheckedCreateWithoutCreatedByInput.schema'
import { DiscordEventCreateOrConnectWithoutCreatedByInputObjectSchema } from './DiscordEventCreateOrConnectWithoutCreatedByInput.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventUncheckedCreateNestedManyWithoutCreatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordEventCreateWithoutCreatedByInputObjectSchema),
          z
            .lazy(() => DiscordEventCreateWithoutCreatedByInputObjectSchema)
            .array(),
          z.lazy(
            () => DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventUncheckedCreateWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiscordEventCreateOrConnectWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventCreateOrConnectWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DiscordEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema =
  Schema