import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AccessLevelUpdateOneRequiredWithoutRoleNestedInputObjectSchema } from './AccessLevelUpdateOneRequiredWithoutRoleNestedInput.schema'
import { ConfigurationUpdateOneWithoutRolesNestedInputObjectSchema } from './ConfigurationUpdateOneWithoutRolesNestedInput.schema'
import { DiscordRoleUpdateOneRequiredWithoutRoleNestedInputObjectSchema } from './DiscordRoleUpdateOneRequiredWithoutRoleNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpdateInput> = z
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
    Configuration: z
      .lazy(() => ConfigurationUpdateOneWithoutRolesNestedInputObjectSchema)
      .optional(),
    discordRole: z
      .lazy(
        () => DiscordRoleUpdateOneRequiredWithoutRoleNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AccessLevelRoleUpdateInputObjectSchema = Schema
