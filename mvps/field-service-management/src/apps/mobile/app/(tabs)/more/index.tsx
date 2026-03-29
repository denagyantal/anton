import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../src/contexts/auth-context';

export default function MoreScreen() {
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity
        style={styles.row}
        onPress={() => router.push('/(tabs)/more/quotes')}
      >
        <Text style={styles.rowText}>Quotes</Text>
        <Text style={styles.rowArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => router.push('/(tabs)/more/profile')}
      >
        <Text style={styles.rowText}>Business Profile</Text>
        <Text style={styles.rowArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => router.push('/(tabs)/more/pricebook')}
      >
        <Text style={styles.rowText}>Pricebook</Text>
        <Text style={styles.rowArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={signOut}>
        <Text style={[styles.rowText, styles.signOutText]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
  rowArrow: {
    fontSize: 20,
    color: '#999',
  },
  signOutText: {
    color: '#e74c3c',
  },
});
