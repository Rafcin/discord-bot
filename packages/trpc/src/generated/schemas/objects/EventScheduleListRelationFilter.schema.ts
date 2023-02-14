import { z } from 'zod'
import { EventScheduleWhereInputObjectSchema } from './EventScheduleWhereInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.EventScheduleListRelationFilter> = z
  .object({
    every: z.lazy(() => EventScheduleWhereInputObjectSchema).optional(),
    some: z.lazy(() => EventScheduleWhereInputObjectSchema).optional(),
    none: z.lazy(() => EventScheduleWhereInputObjectSchema).optional(),
  })
  .strict()

export const EventScheduleListRelationFilterObjectSchema = Schema
