import { clientEnv, clientSchema } from './schema'

const _clientEnv = clientSchema.safeParse(clientEnv)

export const formatErrors = (
  /** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */
  errors
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      if (value && '_errors' in value)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        return `${name}: ${value._errors.join(', ')}\n`
    })
    .filter(Boolean)

if (_clientEnv.success === false) {
  console.error(
    '[env/client.mjs] ❌ Invalid environment variables:\n',
    ...formatErrors(_clientEnv.error.format())
  )
  throw new Error('[env/client.mjs] ❌ Invalid environment variables.')
}

/**
 * Validate that client-side environment variables are exposed to the client.
 */
// eslint-disable-next-line prefer-const
for (let key of Object.keys(_clientEnv.data)) {
  if (!key.startsWith('NEXT_PUBLIC_')) {
    console.warn(
      `[env/client.mjs] ❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`
    )

    throw new Error(
      '[env/client.mjs] ❌ Invalid public environment variable name.'
    )
  }
}

export const client_env = _clientEnv.data
