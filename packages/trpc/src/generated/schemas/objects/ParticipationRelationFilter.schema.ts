import { z } from 'zod'
import { ParticipationWhereInputObjectSchema } from './ParticipationWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.ParticipationRelationFilter> = z
  .object({
    is: z.lazy(() => ParticipationWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ParticipationWhereInputObjectSchema).optional(),
  })
  .strict()

export const ParticipationRelationFilterObjectSchema = Schema
