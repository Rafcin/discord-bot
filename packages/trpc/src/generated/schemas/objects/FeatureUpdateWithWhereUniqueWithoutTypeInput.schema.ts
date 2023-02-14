import { z } from 'zod'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureUpdateWithoutTypeInputObjectSchema } from './FeatureUpdateWithoutTypeInput.schema'
import { FeatureUncheckedUpdateWithoutTypeInputObjectSchema } from './FeatureUncheckedUpdateWithoutTypeInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureUpdateWithWhereUniqueWithoutTypeInput> = z
  .object({
    where: z.lazy(() => FeatureWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => FeatureUpdateWithoutTypeInputObjectSchema),
      z.lazy(() => FeatureUncheckedUpdateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureUpdateWithWhereUniqueWithoutTypeInputObjectSchema = Schema