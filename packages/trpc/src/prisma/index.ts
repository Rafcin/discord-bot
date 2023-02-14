import { Prisma, PrismaClient } from '@hey-amplify/prisma-client'
import { server_env } from '../env/server'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const prismaOptions: Prisma.PrismaClientOptions = {
  log:
    server_env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
}

export const prisma = global.prisma || new PrismaClient(prismaOptions)

export const customPrisma = (options: Prisma.PrismaClientOptions) =>
  new PrismaClient({ ...prismaOptions, ...options })

if (server_env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
