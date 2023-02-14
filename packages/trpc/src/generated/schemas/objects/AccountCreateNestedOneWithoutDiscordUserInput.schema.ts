import { z } from 'zod'
import { AccountCreateWithoutDiscordUserInputObjectSchema } from './AccountCreateWithoutDiscordUserInput.schema'
import { AccountUncheckedCreateWithoutDiscordUserInputObjectSchema } from './AccountUncheckedCreateWithoutDiscordUserInput.schema'
import { AccountCreateOrConnectWithoutDiscordUserInputObjectSchema } from './AccountCreateOrConnectWithoutDiscordUserInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccountCreateNestedOneWithoutDiscordUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutDiscordUserInputObjectSchema),
          z.lazy(
            () => AccountUncheckedCreateWithoutDiscordUserInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountCreateOrConnectWithoutDiscordUserInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const AccountCreateNestedOneWithoutDiscordUserInputObjectSchema = Schema
