import { z } from 'zod'
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema'
import { ParticipationCreateWithoutAnswerInputObjectSchema } from './ParticipationCreateWithoutAnswerInput.schema'
import { ParticipationUncheckedCreateWithoutAnswerInputObjectSchema } from './ParticipationUncheckedCreateWithoutAnswerInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ParticipationCreateOrConnectWithoutAnswerInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutAnswerInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedCreateWithoutAnswerInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ParticipationCreateOrConnectWithoutAnswerInputObjectSchema = Schema
