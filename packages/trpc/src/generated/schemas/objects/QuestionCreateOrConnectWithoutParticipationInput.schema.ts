import { z } from 'zod'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionCreateWithoutParticipationInputObjectSchema } from './QuestionCreateWithoutParticipationInput.schema'
import { QuestionUncheckedCreateWithoutParticipationInputObjectSchema } from './QuestionUncheckedCreateWithoutParticipationInput.schema'

import type { Prisma } from '../../../../../prisma-client/build/generated/client'

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutParticipationInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => QuestionUncheckedCreateWithoutParticipationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const QuestionCreateOrConnectWithoutParticipationInputObjectSchema =
  Schema
