import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Jobs',
        }}
      />
      <Tabs.Screen
        name="customers"
        options={{
          title: 'Customers',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
        }}
      />
    </Tabs>
  );
}
