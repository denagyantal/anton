import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert,
} from 'react-native';
import { useAuth } from '../../src/contexts/auth-context';

export default function CompleteRegistrationScreen() {
  const { registerMember } = useAuth();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleComplete() {
    if (!name.trim()) {
      Alert.alert('Name Required', 'Please enter your full name.');
      return;
    }
    setIsSubmitting(true);
    try {
      await registerMember(name.trim(), phone.trim() || undefined);
      // Auth context re-fetches account → isInvitedMember becomes false
      // _layout.tsx re-routes to main tabs automatically
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Could not complete setup. Please try again.';
      Alert.alert('Setup Failed', message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Setup</Text>
      <Text style={styles.subtitle}>
        You've been invited to join a team. Enter your details to get started.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Your Full Name *"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        autoFocus
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number (optional)"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity
        style={[styles.button, isSubmitting && styles.buttonDisabled]}
        onPress={handleComplete}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Join Team</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 80, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#111827', marginBottom: 12 },
  subtitle: { fontSize: 16, color: '#6b7280', marginBottom: 32, lineHeight: 24 },
  input: {
    borderWidth: 1, borderColor: '#d1d5db', borderRadius: 10,
    paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, marginBottom: 14,
  },
  button: {
    backgroundColor: '#2563eb', paddingVertical: 16, borderRadius: 10, alignItems: 'center', marginTop: 8,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  buttonDisabled: { opacity: 0.6 },
});
