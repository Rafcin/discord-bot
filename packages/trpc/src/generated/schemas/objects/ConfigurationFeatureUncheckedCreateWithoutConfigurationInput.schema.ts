import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUncheckedCreateWithoutConfigurationInput> =
  z
    .object({
      id: z.string().optional(),
      featureCode: z.string(),
      enabled: z.boolean().optional(),
    })
    .strict()

export const ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema =
  Schema
