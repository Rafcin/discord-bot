import { z } from 'zod'
import { FeatureInputsWhereUniqueInputObjectSchema } from './FeatureInputsWhereUniqueInput.schema'
import { FeatureInputsCreateWithoutFeatureInputObjectSchema } from './FeatureInputsCreateWithoutFeatureInput.schema'
import { FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedCreateWithoutFeatureInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureInputsCreateOrConnectWithoutFeatureInput> =
  z
    .object({
      where: z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FeatureInputsCreateWithoutFeatureInputObjectSchema),
        z.lazy(
          () => FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema
        ),
      ]),
    })
    .strict()

export const FeatureInputsCreateOrConnectWithoutFeatureInputObjectSchema =
  Schema
