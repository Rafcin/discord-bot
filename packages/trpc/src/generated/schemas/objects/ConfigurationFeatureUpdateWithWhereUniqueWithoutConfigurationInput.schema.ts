import { z } from 'zod'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureUpdateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUpdateWithoutConfigurationInput.schema'
import { ConfigurationFeatureUncheckedUpdateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUncheckedUpdateWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpdateWithWhereUniqueWithoutConfigurationInput> =
  z
    .object({
      where: z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ConfigurationFeatureUpdateWithoutConfigurationInputObjectSchema
        ),
        z.lazy(
          () =>
            ConfigurationFeatureUncheckedUpdateWithoutConfigurationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ConfigurationFeatureUpdateWithWhereUniqueWithoutConfigurationInputObjectSchema =
  Schema