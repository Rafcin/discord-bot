import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { ConfigurationFeatureUpdateManyWithoutFeatureNestedInputObjectSchema } from './ConfigurationFeatureUpdateManyWithoutFeatureNestedInput.schema'
import { FeatureInputsUpdateManyWithoutFeatureNestedInputObjectSchema } from './FeatureInputsUpdateManyWithoutFeatureNestedInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureUpdateWithoutTypeInput> = z
  .object({
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    configurations: z
      .lazy(
        () =>
          ConfigurationFeatureUpdateManyWithoutFeatureNestedInputObjectSchema
      )
      .optional(),
    inputs: z
      .lazy(() => FeatureInputsUpdateManyWithoutFeatureNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const FeatureUpdateWithoutTypeInputObjectSchema = Schema