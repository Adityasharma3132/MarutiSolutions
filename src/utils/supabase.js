import { createClient } from '@supabase/supabase-js'

// Remove any whitespace and quotes from the URL and key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL.trim()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY.trim().replace(/['"]/g, '')

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Create Supabase client with additional options
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: false
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    }
  }
}) 