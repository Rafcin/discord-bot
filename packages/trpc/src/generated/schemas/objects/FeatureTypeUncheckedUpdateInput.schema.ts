import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FeatureUncheckedUpdateManyWithoutTypeNestedInputObjectSchema } from './FeatureUncheckedUpdateManyWithoutTypeNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureTypeUncheckedUpdateInput> = z
  .object({
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    features: z
      .lazy(() => FeatureUncheckedUpdateManyWithoutTypeNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureTypeUncheckedUpdateInputObjectSchema = Schema
