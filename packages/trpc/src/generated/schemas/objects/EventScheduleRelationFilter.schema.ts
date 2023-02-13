import { z } from 'zod'
import { EventScheduleWhereInputObjectSchema } from './EventScheduleWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.EventScheduleRelationFilter> = z
  .object({
    is: z
      .lazy(() => EventScheduleWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => EventScheduleWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const EventScheduleRelationFilterObjectSchema = Schema
