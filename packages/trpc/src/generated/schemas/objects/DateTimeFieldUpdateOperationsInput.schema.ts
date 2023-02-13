import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z
  .object({
    set: z.date().optional(),
  })
  .strict()

export const DateTimeFieldUpdateOperationsInputObjectSchema = Schema
