import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from './env.js';

// Lazy initialization to avoid throwing during test imports
let _supabaseAdmin: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
  }
  return _supabaseAdmin;
}

// For backward compat and easy mocking in tests
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return getSupabaseAdmin()[prop as keyof SupabaseClient];
  },
});
