import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { ConfigurationUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema } from './ConfigurationUpdateOneRequiredWithoutFeaturesNestedInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpdateWithoutFeatureInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      configuration: z
        .lazy(
          () =>
            ConfigurationUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema
        )
        .optional(),
      enabled: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const ConfigurationFeatureUpdateWithoutFeatureInputObjectSchema = Schema
