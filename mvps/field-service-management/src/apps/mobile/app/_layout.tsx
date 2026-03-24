import { Stack } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { DatabaseProvider } from '../src/contexts/database-context';
import { AuthProvider, useAuth } from '../src/contexts/auth-context';

function AuthGate() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="(tabs)" />
      ) : (
        <Stack.Screen name="(auth)" />
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <AuthGate />
      </DatabaseProvider>
    </AuthProvider>
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
