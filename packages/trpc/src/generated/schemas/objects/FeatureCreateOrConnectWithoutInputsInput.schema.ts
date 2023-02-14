import { z } from 'zod'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureCreateWithoutInputsInputObjectSchema } from './FeatureCreateWithoutInputsInput.schema'
import { FeatureUncheckedCreateWithoutInputsInputObjectSchema } from './FeatureUncheckedCreateWithoutInputsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureCreateOrConnectWithoutInputsInput> = z
  .object({
    where: z.lazy(() => FeatureWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FeatureCreateWithoutInputsInputObjectSchema),
      z.lazy(() => FeatureUncheckedCreateWithoutInputsInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureCreateOrConnectWithoutInputsInputObjectSchema = Schema
