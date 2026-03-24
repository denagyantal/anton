import { Stack } from 'expo-router';
import { DatabaseProvider } from '../src/contexts/database-context';

export default function RootLayout() {
  return (
    <DatabaseProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </DatabaseProvider>
  );
}
