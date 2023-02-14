import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { AccessLevelRoleUncheckedUpdateManyWithoutAccessLevelNestedInputObjectSchema } from './AccessLevelRoleUncheckedUpdateManyWithoutAccessLevelNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelUncheckedUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    role: z
      .lazy(
        () =>
          AccessLevelRoleUncheckedUpdateManyWithoutAccessLevelNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AccessLevelUncheckedUpdateInputObjectSchema = Schema
