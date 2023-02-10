import { Prisma, PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const opts: Prisma.PrismaClientOptions = {}

export const prisma = global.prisma || new PrismaClient(opts)

//Custom Prisma escape hatch
export const cp = (options: Prisma.PrismaClientOptions) =>
  new PrismaClient({ ...opts, ...options })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
