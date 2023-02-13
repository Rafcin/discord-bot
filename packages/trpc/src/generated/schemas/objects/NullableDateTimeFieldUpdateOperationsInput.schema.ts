import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z
  .object({
    set: z.date().optional().nullable(),
  })
  .strict()

export const NullableDateTimeFieldUpdateOperationsInputObjectSchema = Schema
