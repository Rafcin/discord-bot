import { z } from 'zod'
import { ParticipationScalarWhereInputObjectSchema } from './ParticipationScalarWhereInput.schema'
import { ParticipationUpdateManyMutationInputObjectSchema } from './ParticipationUpdateManyMutationInput.schema'
import { ParticipationUncheckedUpdateManyWithoutParticipationsInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutParticipationsInput.schema'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ParticipationUpdateManyWithWhereWithoutParticipantInput> =
  z
    .object({
      where: z.lazy(() => ParticipationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ParticipationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ParticipationUncheckedUpdateManyWithoutParticipationsInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ParticipationUpdateManyWithWhereWithoutParticipantInputObjectSchema =
  Schema
