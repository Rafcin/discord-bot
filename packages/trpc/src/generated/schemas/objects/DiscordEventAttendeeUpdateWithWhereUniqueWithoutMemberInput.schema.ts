import { z } from 'zod'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeUpdateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUpdateWithoutMemberInput.schema'
import { DiscordEventAttendeeUncheckedUpdateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUncheckedUpdateWithoutMemberInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUpdateWithWhereUniqueWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordEventAttendeeUpdateWithoutMemberInputObjectSchema),
        z.lazy(
          () =>
            DiscordEventAttendeeUncheckedUpdateWithoutMemberInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventAttendeeUpdateWithWhereUniqueWithoutMemberInputObjectSchema =
  Schema
