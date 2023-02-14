import { z } from 'zod'
import { EventScheduleCountOutputTypeSelectObjectSchema } from './EventScheduleCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.EventScheduleCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => EventScheduleCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict()

export const EventScheduleCountOutputTypeArgsObjectSchema = Schema
