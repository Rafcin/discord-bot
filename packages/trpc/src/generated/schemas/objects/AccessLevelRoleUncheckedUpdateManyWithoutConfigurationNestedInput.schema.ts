import { z } from 'zod'
import { AccessLevelRoleCreateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleCreateWithoutConfigurationInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutConfigurationInput.schema'
import { AccessLevelRoleCreateOrConnectWithoutConfigurationInputObjectSchema } from './AccessLevelRoleCreateOrConnectWithoutConfigurationInput.schema'
import { AccessLevelRoleUpsertWithWhereUniqueWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUpsertWithWhereUniqueWithoutConfigurationInput.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleUpdateWithWhereUniqueWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUpdateWithWhereUniqueWithoutConfigurationInput.schema'
import { AccessLevelRoleUpdateManyWithWhereWithoutConfigurationInputObjectSchema } from './AccessLevelRoleUpdateManyWithWhereWithoutConfigurationInput.schema'
import { AccessLevelRoleScalarWhereInputObjectSchema } from './AccessLevelRoleScalarWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleUncheckedUpdateManyWithoutConfigurationNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              AccessLevelRoleUpsertWithWhereUniqueWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                AccessLevelRoleUpsertWithWhereUniqueWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
          z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              AccessLevelRoleUpdateWithWhereUniqueWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                AccessLevelRoleUpdateWithWhereUniqueWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              AccessLevelRoleUpdateManyWithWhereWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                AccessLevelRoleUpdateManyWithWhereWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema),
          z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const AccessLevelRoleUncheckedUpdateManyWithoutConfigurationNestedInputObjectSchema =
  Schema
