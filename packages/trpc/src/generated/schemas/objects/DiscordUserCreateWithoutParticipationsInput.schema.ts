import { z } from 'zod'
import { AccountCreateNestedOneWithoutDiscordUserInputObjectSchema } from './AccountCreateNestedOneWithoutDiscordUserInput.schema'
import { AnswerCreateNestedManyWithoutOwnerInputObjectSchema } from './AnswerCreateNestedManyWithoutOwnerInput.schema'
import { DiscordEventAttendeeCreateNestedManyWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateNestedManyWithoutMemberInput.schema'
import { DiscordEventCreateNestedManyWithoutCreatedByInputObjectSchema } from './DiscordEventCreateNestedManyWithoutCreatedByInput.schema'
import { EventScheduleCreateNestedManyWithoutCreatedByInputObjectSchema } from './EventScheduleCreateNestedManyWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.DiscordUserCreateWithoutParticipationsInput> = z
  .object({
    id: z.string(),
    account: z
      .lazy(() => AccountCreateNestedOneWithoutDiscordUserInputObjectSchema)
      .optional(),
    answers: z
      .lazy(() => AnswerCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    attended: z
      .lazy(
        () => DiscordEventAttendeeCreateNestedManyWithoutMemberInputObjectSchema
      )
      .optional(),
    createdEvents: z
      .lazy(() => DiscordEventCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
    createdSchedules: z
      .lazy(
        () => EventScheduleCreateNestedManyWithoutCreatedByInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordUserCreateWithoutParticipationsInputObjectSchema = Schema