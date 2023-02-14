import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ParticipationMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    participantId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const ParticipationMinOrderByAggregateInputObjectSchema = Schema