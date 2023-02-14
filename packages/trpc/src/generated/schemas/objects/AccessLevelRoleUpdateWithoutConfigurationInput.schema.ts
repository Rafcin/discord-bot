import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AccessLevelUpdateOneRequiredWithoutRoleNestedInputObjectSchema } from './AccessLevelUpdateOneRequiredWithoutRoleNestedInput.schema'
import { DiscordRoleUpdateOneRequiredWithoutRoleNestedInputObjectSchema } from './DiscordRoleUpdateOneRequiredWithoutRoleNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpdateWithoutConfigurationInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      accessLevel: z
        .lazy(
          () => AccessLevelUpdateOneRequiredWithoutRoleNestedInputObjectSchema
        )
        .optional(),
      discordRole: z
        .lazy(
          () => DiscordRoleUpdateOneRequiredWithoutRoleNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const AccessLevelRoleUpdateWithoutConfigurationInputObjectSchema = Schema