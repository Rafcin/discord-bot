import { z } from 'zod'

export const AccountScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'provider',
  'providerAccountId',
  'refresh_token',
  'access_token',
  'expires_at',
  'refresh_token_expires_in',
  'token_type',
  'scope',
  'id_token',
  'session_state',
  'userId',
])
