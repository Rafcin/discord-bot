import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUncheckedUpdateWithoutFeatureInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      configurationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      enabled: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const ConfigurationFeatureUncheckedUpdateWithoutFeatureInputObjectSchema =
  Schema
