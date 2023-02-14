import { z } from 'zod'
import { EventScheduleSelectObjectSchema } from './EventScheduleSelect.schema'
import { EventScheduleIncludeObjectSchema } from './EventScheduleInclude.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.EventScheduleArgs> = z
  .object({
    select: z.lazy(() => EventScheduleSelectObjectSchema).optional(),
    include: z.lazy(() => EventScheduleIncludeObjectSchema).optional(),
  })
  .strict()

export const EventScheduleArgsObjectSchema = Schema
