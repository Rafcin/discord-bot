import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    accessLevelId: z.lazy(() => SortOrderSchema).optional(),
    configurationId: z.lazy(() => SortOrderSchema).optional(),
    discordRoleId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const AccessLevelRoleCountOrderByAggregateInputObjectSchema = Schema
