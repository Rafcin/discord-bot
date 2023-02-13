import superjson from 'superjson'

export default {
  transformer: superjson,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  errorFormatter({ shape }) {
    return shape
  },
}
