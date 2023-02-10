import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AccessLevelRoleUncheckedUpdateOneWithoutDiscordRoleNestedInputObjectSchema } from './AccessLevelRoleUncheckedUpdateOneWithoutDiscordRoleNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUncheckedUpdateWithoutParticipationInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      role: z
        .lazy(
          () =>
            AccessLevelRoleUncheckedUpdateOneWithoutDiscordRoleNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const DiscordRoleUncheckedUpdateWithoutParticipationInputObjectSchema =
  Schema
