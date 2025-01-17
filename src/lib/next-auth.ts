import { createAppAuth } from '@octokit/auth-app'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import cookie from 'cookie'
import { NextAuthHandler } from 'next-auth/core'
import DiscordProvider from 'next-auth/providers/discord'
import GithubProvider from 'next-auth/providers/github'
import { prisma } from '$lib/db'
import getFormBody from './support/get-form-body'
import { applyRoles } from './github/apply-roles'
import type { NextAuthOptions, NextAuthAction } from 'next-auth'
import type {
  OutgoingResponse as NextAuthResponse,
  RequestInternal,
} from 'next-auth/core'
import type { ServerLoadEvent } from '@sveltejs/kit'

// TODO: can we get around this behavior for SSR builds?
// @ts-expect-error import is exported on .default during SSR
const discord = DiscordProvider?.default || DiscordProvider
// @ts-expect-error import is exported on .default during SSR
const github = GithubProvider?.default || GithubProvider

const adapter = PrismaAdapter(prisma)

export const options: NextAuthOptions = {
  adapter,
  // debug: import.meta.env.DEV,
  providers: [
    discord({
      clientId: process.env.DISCORD_AUTH_CLIENT_ID,
      clientSecret: process.env.DISCORD_AUTH_CLIENT_SECRET,
    }),
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/logout',
    error: '/auth/error', // Error code passed in query string as ?error=
  },
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: 'database',

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 60, // 30 minutes

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 15 * 60, // 15 minutes
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user }) {
      session!.user!.id = user.id
      return session
    },
  },
  events: {
    /**
     * @TODO link `DiscordUser` model to `Account` model
     */
    // async createAccount({ user }) {
    // },
    async signIn({ user, account }) {
      if (account.provider === 'discord') {
        await prisma.discordUser.upsert({
          where: { id: account.providerAccountId },
          create: {
            id: account.providerAccountId,
            account: {
              connect: {
                provider_providerAccountId: {
                  provider: account.provider, // discord
                  providerAccountId: account.providerAccountId,
                },
              },
            },
          },
          update: {
            account: {
              connect: {
                provider_providerAccountId: {
                  provider: account.provider, // discord
                  providerAccountId: account.providerAccountId,
                },
              },
            },
          },
        })
      }
      // if user is signing into github
      if (
        account?.provider === 'github' &&
        account?.providerAccountId &&
        user?.id
      ) {
        const { privateKey } = JSON.parse(process.env.GITHUB_PRIVATE_KEY)
        const auth = createAppAuth({
          appId: process.env.GITHUB_APP_ID,
          privateKey: privateKey,
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })

        try {
          const { token } = await auth({
            type: 'installation',
            installationId: process.env.GITHUB_INSTALLATION_ID,
          })

          await applyRoles(user.id, account.providerAccountId, token)
        } catch (err) {
          console.error(`Error fetching installation token: ${err}`)
        }
      }
    },
  },
}

async function toSvelteKitResponse(
  request: Request,
  nextAuthResponse: NextAuthResponse<unknown>
) {
  const { cookies, redirect } = nextAuthResponse

  const headers = new Headers()
  for (const header of nextAuthResponse?.headers || []) {
    // pass headers along from next-auth
    headers.set(header.key, header.value)
  }

  // set-cookie header
  if (cookies?.length) {
    headers.set(
      'set-cookie',
      cookies
        ?.map((item) => cookie.serialize(item.name, item.value, item.options))
        .join(',') as string
    )
  }

  let body = undefined
  let status = nextAuthResponse.status || 200

  if (redirect) {
    let formData = null
    try {
      formData = await request.formData()
      formData = getFormBody(formData)
    } catch {
      // no formData passed
    }
    if (formData?.json !== 'true') {
      status = 302
      headers.set('Location', redirect)
    } else {
      body = { url: redirect }
    }
  } else {
    if (status >= 400 && typeof nextAuthResponse.body === 'string') {
      body = nextAuthResponse.body.replace(' by NextAuth.js', '')
    } else {
      body = nextAuthResponse.body
    }
  }

  return new Response(JSON.stringify(body), {
    status,
    headers,
  })
}

async function SKNextAuthHandler(
  { request, url, params }: ServerLoadEvent,
  options: NextAuthOptions
) {
  const [action, provider] = params.nextauth!.split('/')
  let body = undefined
  try {
    body = await request.formData()
    body = getFormBody(body)
  } catch {
    // no formData passed
  }
  options.secret = process.env.NEXTAUTH_SECRET
  const req: RequestInternal = {
    host: import.meta.env.VITE_NEXTAUTH_URL,
    body,
    query: Object.fromEntries(url.searchParams),
    headers: request.headers,
    method: request.method,
    // this is causing issues if browser does not have cookies
    cookies: cookie.parse(request.headers.get('cookie') || ''),
    action: action as NextAuthAction,
    providerId: provider,
    error: provider,
  }

  const response = await NextAuthHandler({
    req,
    options,
  })

  return toSvelteKitResponse(request, response)
}

export async function getServerSession(
  request: Request,
  options: NextAuthOptions
): Promise<App.Session | null> {
  options.secret = process.env.NEXTAUTH_SECRET

  const session = await NextAuthHandler<App.Session>({
    req: {
      host: import.meta.env.VITE_NEXTAUTH_URL,
      action: 'session',
      method: 'GET',
      cookies: cookie.parse(request.headers.get('cookie') || ''),
      headers: request.headers,
    },
    options,
  })

  const { body } = session

  if (body && Object.keys(body).length) {
    return body as App.Session
  }
  return null
}

export default (
  options: NextAuthOptions
): {
  GET: (event) => Promise<unknown>
  POST: (event) => Promise<unknown>
} => ({
  GET: (event) => SKNextAuthHandler(event, options),
  POST: (event) => SKNextAuthHandler(event, options),
})
