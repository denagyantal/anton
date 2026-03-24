import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { supabase } from '../services/supabase-client';
import { apiClient } from '../services/api-client';
import type { Session, User } from '@supabase/supabase-js';
import type { AccountResponse } from '@field-service/shared';

interface AuthUser {
  id: string;
  email: string;
  accountId: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  session: Session | null;
  account: AccountResponse | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isOnboarded: boolean;
  signUp: (email: string, phone: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
  refreshAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function mapUser(user: User): AuthUser {
  return {
    id: user.id,
    email: user.email ?? '',
    accountId: (user.user_metadata?.account_id as string) ?? '',
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [account, setAccount] = useState<AccountResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAccount = useCallback(async () => {
    try {
      const data = await apiClient.get<AccountResponse>('/api/v1/accounts/me');
      setAccount(data);
    } catch {
      // Account fetch may fail if not set up yet — that's expected
      setAccount(null);
    }
  }, []);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(async ({ data: { session: currentSession } }) => {
      setSession(currentSession);
      const mappedUser = currentSession?.user ? mapUser(currentSession.user) : null;
      setUser(mappedUser);

      if (mappedUser) {
        await fetchAccount();
      }

      setIsLoading(false);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession);
      const mappedUser = newSession?.user ? mapUser(newSession.user) : null;
      setUser(mappedUser);

      if (mappedUser) {
        await fetchAccount();
      } else {
        setAccount(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchAccount]);

  // Check session on app foreground
  useEffect(() => {
    const handleAppStateChange = async (state: AppStateStatus) => {
      if (state === 'active') {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        if (!currentSession) {
          setSession(null);
          setUser(null);
          setAccount(null);
        }
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, []);

  const signUp = useCallback(async (email: string, phone: string, password: string) => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3001';
    const response = await fetch(`${apiUrl}/api/v1/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, phone, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error?.message ?? 'Signup failed');
    }

    // If signup returned a session, set it via Supabase sign in
    if (result.data?.session) {
      await supabase.auth.setSession({
        access_token: result.data.session.accessToken,
        refresh_token: result.data.session.refreshToken,
      });
    }
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      throw new Error(error.message);
    }
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setAccount(null);
  }, []);

  const refreshSession = useCallback(async () => {
    const { data, error } = await supabase.auth.refreshSession();
    if (error || !data.session) {
      setSession(null);
      setUser(null);
      setAccount(null);
      return;
    }
    setSession(data.session);
    setUser(data.session.user ? mapUser(data.session.user) : null);
  }, []);

  const refreshAccount = useCallback(async () => {
    await fetchAccount();
  }, [fetchAccount]);

  const isOnboarded = account?.tradeType != null;

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        account,
        isLoading,
        isAuthenticated: !!session && !!user,
        isOnboarded,
        signUp,
        signIn,
        signOut,
        refreshSession,
        refreshAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
