import { z } from 'zod'
import { FeatureInputsWhereUniqueInputObjectSchema } from './FeatureInputsWhereUniqueInput.schema'
import { FeatureInputsUpdateWithoutFeatureInputObjectSchema } from './FeatureInputsUpdateWithoutFeatureInput.schema'
import { FeatureInputsUncheckedUpdateWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedUpdateWithoutFeatureInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.FeatureInputsUpdateWithWhereUniqueWithoutFeatureInput> =
  z
    .object({
      where: z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FeatureInputsUpdateWithoutFeatureInputObjectSchema),
        z.lazy(
          () => FeatureInputsUncheckedUpdateWithoutFeatureInputObjectSchema
        ),
      ]),
    })
    .strict()

export const FeatureInputsUpdateWithWhereUniqueWithoutFeatureInputObjectSchema =
  Schema
