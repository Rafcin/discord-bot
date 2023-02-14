import { z } from 'zod'
import { FeatureInputsScalarWhereInputObjectSchema } from './FeatureInputsScalarWhereInput.schema'
import { FeatureInputsUpdateManyMutationInputObjectSchema } from './FeatureInputsUpdateManyMutationInput.schema'
import { FeatureInputsUncheckedUpdateManyWithoutInputsInputObjectSchema } from './FeatureInputsUncheckedUpdateManyWithoutInputsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureInputsUpdateManyWithWhereWithoutFeatureInput> =
  z
    .object({
      where: z.lazy(() => FeatureInputsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FeatureInputsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => FeatureInputsUncheckedUpdateManyWithoutInputsInputObjectSchema
        ),
      ]),
    })
    .strict()

export const FeatureInputsUpdateManyWithWhereWithoutFeatureInputObjectSchema =
  Schema
