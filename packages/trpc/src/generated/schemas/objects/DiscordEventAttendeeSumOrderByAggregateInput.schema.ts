import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeSumOrderByAggregateInput> = z
  .object({
    time: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const DiscordEventAttendeeSumOrderByAggregateInputObjectSchema = Schema