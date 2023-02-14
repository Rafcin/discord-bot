import { z } from 'zod'
import { FeatureInputsWhereUniqueInputObjectSchema } from './FeatureInputsWhereUniqueInput.schema'
import { FeatureInputsUpdateWithoutFeatureInputObjectSchema } from './FeatureInputsUpdateWithoutFeatureInput.schema'
import { FeatureInputsUncheckedUpdateWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedUpdateWithoutFeatureInput.schema'
import { FeatureInputsCreateWithoutFeatureInputObjectSchema } from './FeatureInputsCreateWithoutFeatureInput.schema'
import { FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedCreateWithoutFeatureInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureInputsUpsertWithWhereUniqueWithoutFeatureInput> =
  z
    .object({
      where: z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FeatureInputsUpdateWithoutFeatureInputObjectSchema),
        z.lazy(
          () => FeatureInputsUncheckedUpdateWithoutFeatureInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => FeatureInputsCreateWithoutFeatureInputObjectSchema),
        z.lazy(
          () => FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema
        ),
      ]),
    })
    .strict()

export const FeatureInputsUpsertWithWhereUniqueWithoutFeatureInputObjectSchema =
  Schema
