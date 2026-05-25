import { Stack, Redirect } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { DatabaseProvider } from '../src/contexts/database-context';
import { AuthProvider, useAuth } from '../src/contexts/auth-context';
import { NetworkProvider } from '../src/contexts/network-context';
import { SyncProvider } from '../src/contexts/sync-context';

function AuthGate() {
  const { isLoading, isAuthenticated, isOnboarded } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
      </Stack>
    );
  }

  if (!isOnboarded) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
      </Stack>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="(modals)/create-quote"
        options={{ presentation: 'modal', headerShown: false }}
      />
      <Stack.Screen
        name="(modals)/payment"
        options={{ presentation: 'modal', headerShown: false }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <StripeProvider publishableKey={process.env['EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY'] ?? ''}>
      <AuthProvider>
        <NetworkProvider>
          <DatabaseProvider>
            <SyncProvider>
              <AuthGate />
            </SyncProvider>
          </DatabaseProvider>
        </NetworkProvider>
      </AuthProvider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
