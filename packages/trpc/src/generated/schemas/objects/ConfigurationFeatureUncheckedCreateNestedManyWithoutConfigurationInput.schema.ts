import { z } from 'zod'
import { ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureCreateWithoutConfigurationInput.schema'
import { ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUncheckedCreateWithoutConfigurationInput.schema'
import { ConfigurationFeatureCreateOrConnectWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureCreateOrConnectWithoutConfigurationInput.schema'
import { ConfigurationFeatureCreateManyConfigurationInputEnvelopeObjectSchema } from './ConfigurationFeatureCreateManyConfigurationInputEnvelope.schema'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUncheckedCreateNestedManyWithoutConfigurationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ConfigurationFeatureCreateOrConnectWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureCreateOrConnectWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ConfigurationFeatureCreateManyConfigurationInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
          z
            .lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict()

export const ConfigurationFeatureUncheckedCreateNestedManyWithoutConfigurationInputObjectSchema =
  Schema