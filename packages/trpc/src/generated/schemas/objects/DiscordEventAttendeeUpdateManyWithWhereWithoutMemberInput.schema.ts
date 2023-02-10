import { z } from 'zod'
import { DiscordEventAttendeeScalarWhereInputObjectSchema } from './DiscordEventAttendeeScalarWhereInput.schema'
import { DiscordEventAttendeeUpdateManyMutationInputObjectSchema } from './DiscordEventAttendeeUpdateManyMutationInput.schema'
import { DiscordEventAttendeeUncheckedUpdateManyWithoutAttendedInputObjectSchema } from './DiscordEventAttendeeUncheckedUpdateManyWithoutAttendedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUpdateManyWithWhereWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventAttendeeScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordEventAttendeeUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DiscordEventAttendeeUncheckedUpdateManyWithoutAttendedInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventAttendeeUpdateManyWithWhereWithoutMemberInputObjectSchema =
  Schema
