import { z } from 'zod'
import { DiscordUserUpdateOneRequiredWithoutAttendedNestedInputObjectSchema } from './DiscordUserUpdateOneRequiredWithoutAttendedNestedInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUpdateWithoutEventInput> = z
  .object({
    member: z
      .lazy(
        () => DiscordUserUpdateOneRequiredWithoutAttendedNestedInputObjectSchema
      )
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    time: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const DiscordEventAttendeeUpdateWithoutEventInputObjectSchema = Schema
