import { Stack } from 'expo-router';

export default function QuotesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Quotes' }} />
      <Stack.Screen name="[id]" options={{ title: 'Quote Details' }} />
    </Stack>
  );
}
