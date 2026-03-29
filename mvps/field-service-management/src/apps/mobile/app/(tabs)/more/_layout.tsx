import { Stack } from 'expo-router';

export default function MoreLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="quotes" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: 'Business Profile' }} />
      <Stack.Screen name="pricebook" options={{ title: 'Pricebook' }} />
    </Stack>
  );
}
