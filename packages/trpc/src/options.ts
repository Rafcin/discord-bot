import superjson from 'superjson'

export default {
  transformer: superjson,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  errorFormatter({ shape }) {
    return shape
  },
}
