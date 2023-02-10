import { z } from 'zod'
import { AccessLevelRoleCreateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleCreateWithoutConfigurationInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutConfigurationInput.schema'
import { AccessLevelRoleCreateOrConnectWithoutConfigurationInputObjectSchema } from './AccessLevelRoleCreateOrConnectWithoutConfigurationInput.schema'
import { AccessLevelRoleCreateManyConfigurationInputEnvelopeObjectSchema } from './AccessLevelRoleCreateManyConfigurationInputEnvelope.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateNestedManyWithoutConfigurationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => AccessLevelRoleCreateWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () => AccessLevelRoleCreateWithoutConfigurationInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              AccessLevelRoleUncheckedCreateWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                AccessLevelRoleUncheckedCreateWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AccessLevelRoleCreateOrConnectWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                AccessLevelRoleCreateOrConnectWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => AccessLevelRoleCreateManyConfigurationInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const AccessLevelRoleCreateNestedManyWithoutConfigurationInputObjectSchema =
  Schema
