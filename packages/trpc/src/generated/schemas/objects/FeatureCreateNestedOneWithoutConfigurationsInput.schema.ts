import { z } from 'zod'
import { FeatureCreateWithoutConfigurationsInputObjectSchema } from './FeatureCreateWithoutConfigurationsInput.schema'
import { FeatureUncheckedCreateWithoutConfigurationsInputObjectSchema } from './FeatureUncheckedCreateWithoutConfigurationsInput.schema'
import { FeatureCreateOrConnectWithoutConfigurationsInputObjectSchema } from './FeatureCreateOrConnectWithoutConfigurationsInput.schema'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureCreateNestedOneWithoutConfigurationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FeatureCreateWithoutConfigurationsInputObjectSchema),
          z.lazy(
            () => FeatureUncheckedCreateWithoutConfigurationsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => FeatureCreateOrConnectWithoutConfigurationsInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => FeatureWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const FeatureCreateNestedOneWithoutConfigurationsInputObjectSchema =
  Schema
