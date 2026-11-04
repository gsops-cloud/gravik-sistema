import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
const apiKey = publishableKey || anonKey

export const isSupabaseConfigured = Boolean(url && apiKey)

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url!, apiKey!)
  : null
