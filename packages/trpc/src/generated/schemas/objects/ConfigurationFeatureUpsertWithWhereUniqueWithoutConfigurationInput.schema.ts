import { z } from 'zod'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureUpdateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUpdateWithoutConfigurationInput.schema'
import { ConfigurationFeatureUncheckedUpdateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUncheckedUpdateWithoutConfigurationInput.schema'
import { ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureCreateWithoutConfigurationInput.schema'
import { ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUncheckedCreateWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpsertWithWhereUniqueWithoutConfigurationInput> =
  z
    .object({
      where: z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => ConfigurationFeatureUpdateWithoutConfigurationInputObjectSchema
        ),
        z.lazy(
          () =>
            ConfigurationFeatureUncheckedUpdateWithoutConfigurationInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () => ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema
        ),
        z.lazy(
          () =>
            ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ConfigurationFeatureUpsertWithWhereUniqueWithoutConfigurationInputObjectSchema =
  Schema
