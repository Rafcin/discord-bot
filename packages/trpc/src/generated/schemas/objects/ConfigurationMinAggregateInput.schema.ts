import { z } from 'zod'

import type { Prisma } from '../../../../../prisma-client/build'

const Schema: z.ZodType<Prisma.ConfigurationMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    name: z.literal(true).optional(),
    githubOrganization: z.literal(true).optional(),
  })
  .strict()

export const ConfigurationMinAggregateInputObjectSchema = Schema