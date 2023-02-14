import { z } from 'zod'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureCreateWithoutTypeInputObjectSchema } from './FeatureCreateWithoutTypeInput.schema'
import { FeatureUncheckedCreateWithoutTypeInputObjectSchema } from './FeatureUncheckedCreateWithoutTypeInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureCreateOrConnectWithoutTypeInput> = z
  .object({
    where: z.lazy(() => FeatureWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FeatureCreateWithoutTypeInputObjectSchema),
      z.lazy(() => FeatureUncheckedCreateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureCreateOrConnectWithoutTypeInputObjectSchema = Schema