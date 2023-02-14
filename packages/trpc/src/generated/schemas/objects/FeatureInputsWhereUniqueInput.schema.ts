import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.FeatureInputsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const FeatureInputsWhereUniqueInputObjectSchema = Schema
