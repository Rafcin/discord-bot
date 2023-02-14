import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AccessLevelRoleMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    accessLevelId: z.lazy(() => SortOrderSchema).optional(),
    configurationId: z.lazy(() => SortOrderSchema).optional(),
    discordRoleId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const AccessLevelRoleMaxOrderByAggregateInputObjectSchema = Schema
