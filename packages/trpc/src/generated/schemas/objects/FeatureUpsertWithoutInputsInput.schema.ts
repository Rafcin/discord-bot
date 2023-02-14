import { z } from 'zod'
import { FeatureUpdateWithoutInputsInputObjectSchema } from './FeatureUpdateWithoutInputsInput.schema'
import { FeatureUncheckedUpdateWithoutInputsInputObjectSchema } from './FeatureUncheckedUpdateWithoutInputsInput.schema'
import { FeatureCreateWithoutInputsInputObjectSchema } from './FeatureCreateWithoutInputsInput.schema'
import { FeatureUncheckedCreateWithoutInputsInputObjectSchema } from './FeatureUncheckedCreateWithoutInputsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureUpsertWithoutInputsInput> = z
  .object({
    update: z.union([
      z.lazy(() => FeatureUpdateWithoutInputsInputObjectSchema),
      z.lazy(() => FeatureUncheckedUpdateWithoutInputsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FeatureCreateWithoutInputsInputObjectSchema),
      z.lazy(() => FeatureUncheckedCreateWithoutInputsInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureUpsertWithoutInputsInputObjectSchema = Schema
