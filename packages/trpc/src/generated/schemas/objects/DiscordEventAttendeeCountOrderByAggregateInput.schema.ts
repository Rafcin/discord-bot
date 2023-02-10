import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCountOrderByAggregateInput> =
  z
    .object({
      eventId: z.lazy(() => SortOrderSchema).optional(),
      memberId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      time: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const DiscordEventAttendeeCountOrderByAggregateInputObjectSchema = Schema