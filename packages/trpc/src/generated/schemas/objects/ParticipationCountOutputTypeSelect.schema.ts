import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ParticipationCountOutputTypeSelect> = z
  .object({
    participantRoles: z.boolean().optional(),
  })
  .strict()

export const ParticipationCountOutputTypeSelectObjectSchema = Schema
