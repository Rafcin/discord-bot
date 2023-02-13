import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordUserMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const DiscordUserMinOrderByAggregateInputObjectSchema = Schema
