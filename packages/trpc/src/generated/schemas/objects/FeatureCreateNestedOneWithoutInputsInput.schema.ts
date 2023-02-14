import { z } from 'zod'
import { FeatureCreateWithoutInputsInputObjectSchema } from './FeatureCreateWithoutInputsInput.schema'
import { FeatureUncheckedCreateWithoutInputsInputObjectSchema } from './FeatureUncheckedCreateWithoutInputsInput.schema'
import { FeatureCreateOrConnectWithoutInputsInputObjectSchema } from './FeatureCreateOrConnectWithoutInputsInput.schema'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureCreateNestedOneWithoutInputsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FeatureCreateWithoutInputsInputObjectSchema),
        z.lazy(() => FeatureUncheckedCreateWithoutInputsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => FeatureCreateOrConnectWithoutInputsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => FeatureWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const FeatureCreateNestedOneWithoutInputsInputObjectSchema = Schema
