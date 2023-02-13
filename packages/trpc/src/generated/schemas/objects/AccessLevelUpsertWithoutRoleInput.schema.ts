import { z } from 'zod'
import { AccessLevelUpdateWithoutRoleInputObjectSchema } from './AccessLevelUpdateWithoutRoleInput.schema'
import { AccessLevelUncheckedUpdateWithoutRoleInputObjectSchema } from './AccessLevelUncheckedUpdateWithoutRoleInput.schema'
import { AccessLevelCreateWithoutRoleInputObjectSchema } from './AccessLevelCreateWithoutRoleInput.schema'
import { AccessLevelUncheckedCreateWithoutRoleInputObjectSchema } from './AccessLevelUncheckedCreateWithoutRoleInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.AccessLevelUpsertWithoutRoleInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccessLevelUpdateWithoutRoleInputObjectSchema),
      z.lazy(() => AccessLevelUncheckedUpdateWithoutRoleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccessLevelCreateWithoutRoleInputObjectSchema),
      z.lazy(() => AccessLevelUncheckedCreateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict()

export const AccessLevelUpsertWithoutRoleInputObjectSchema = Schema
