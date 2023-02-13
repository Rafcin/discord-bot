import { z } from 'zod'
import { AccessLevelRoleUpdateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUpdateWithoutDiscordRoleInput.schema'
import { AccessLevelRoleUncheckedUpdateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUncheckedUpdateWithoutDiscordRoleInput.schema'
import { AccessLevelRoleCreateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleCreateWithoutDiscordRoleInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutDiscordRoleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpsertWithoutDiscordRoleInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccessLevelRoleUpdateWithoutDiscordRoleInputObjectSchema),
      z.lazy(
        () => AccessLevelRoleUncheckedUpdateWithoutDiscordRoleInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => AccessLevelRoleCreateWithoutDiscordRoleInputObjectSchema),
      z.lazy(
        () => AccessLevelRoleUncheckedCreateWithoutDiscordRoleInputObjectSchema
      ),
    ]),
  })
  .strict()

export const AccessLevelRoleUpsertWithoutDiscordRoleInputObjectSchema = Schema
