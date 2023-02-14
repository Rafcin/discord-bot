import { z } from 'zod'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureCreateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureCreateWithoutFeatureInput.schema'
import { ConfigurationFeatureUncheckedCreateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUncheckedCreateWithoutFeatureInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationFeatureCreateOrConnectWithoutFeatureInput> =
  z
    .object({
      where: z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ConfigurationFeatureCreateWithoutFeatureInputObjectSchema),
        z.lazy(
          () =>
            ConfigurationFeatureUncheckedCreateWithoutFeatureInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ConfigurationFeatureCreateOrConnectWithoutFeatureInputObjectSchema =
  Schema
