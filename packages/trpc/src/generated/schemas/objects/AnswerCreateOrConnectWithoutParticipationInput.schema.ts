import { z } from 'zod'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'
import { AnswerCreateWithoutParticipationInputObjectSchema } from './AnswerCreateWithoutParticipationInput.schema'
import { AnswerUncheckedCreateWithoutParticipationInputObjectSchema } from './AnswerUncheckedCreateWithoutParticipationInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.AnswerCreateOrConnectWithoutParticipationInput> =
  z
    .object({
      where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AnswerCreateWithoutParticipationInputObjectSchema),
        z.lazy(
          () => AnswerUncheckedCreateWithoutParticipationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const AnswerCreateOrConnectWithoutParticipationInputObjectSchema = Schema