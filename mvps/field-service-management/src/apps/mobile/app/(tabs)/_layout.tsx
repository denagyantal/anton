import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { NetworkStatusBar } from '../../src/components/ui/network-status-bar';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <NetworkStatusBar />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Jobs',
          }}
        />
        <Tabs.Screen
          name="schedule"
          options={{
            title: 'Schedule',
            headerShown: false,
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
        <Tabs.Screen
          name="jobs/[id]"
          options={{ href: null, title: 'Job Details' }}
        />
      </Tabs>
    </View>
  );
}
