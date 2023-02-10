import { z } from 'zod'
import { AnswerCreateManyOwnerInputObjectSchema } from './AnswerCreateManyOwnerInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnswerCreateManyOwnerInputEnvelope> = z
  .object({
    data: z.lazy(() => AnswerCreateManyOwnerInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const AnswerCreateManyOwnerInputEnvelopeObjectSchema = Schema
