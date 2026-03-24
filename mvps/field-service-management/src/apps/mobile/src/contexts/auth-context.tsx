import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { supabase } from '../services/supabase-client';
import type { Session, User } from '@supabase/supabase-js';

interface AuthUser {
  id: string;
  email: string;
  accountId: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signUp: (email: string, phone: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ? mapUser(currentSession.user) : null);
      setIsLoading(false);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ? mapUser(newSession.user) : null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Check session on app foreground
  useEffect(() => {
    const handleAppStateChange = async (state: AppStateStatus) => {
      if (state === 'active') {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        if (!currentSession) {
          setSession(null);
          setUser(null);
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
  }, []);

  const refreshSession = useCallback(async () => {
    const { data, error } = await supabase.auth.refreshSession();
    if (error || !data.session) {
      setSession(null);
      setUser(null);
      return;
    }
    setSession(data.session);
    setUser(data.session.user ? mapUser(data.session.user) : null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isLoading,
        isAuthenticated: !!session && !!user,
        signUp,
        signIn,
        signOut,
        refreshSession,
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
