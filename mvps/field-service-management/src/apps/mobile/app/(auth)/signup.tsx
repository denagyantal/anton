import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '../../src/contexts/auth-context';

interface FormErrors {
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export default function SignupScreen() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else {
      if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      } else if (!/[A-Z]/.test(password)) {
        newErrors.password = 'Password must contain at least one uppercase letter';
      } else if (!/[0-9]/.test(password)) {
        newErrors.password = 'Password must contain at least one number';
      }
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await signUp(email.trim(), phone.trim(), password);
    } catch (err) {
      setErrors({ general: err instanceof Error ? err.message : 'Signup failed' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.form}>
          <Text style={styles.title}>Sign Up</Text>

          {errors.general ? <Text style={styles.errorGeneral}>{errors.general}</Text> : null}

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, errors.email ? styles.inputError : null]}
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={[styles.input, errors.phone ? styles.inputError : null]}
              value={phone}
              onChangeText={setPhone}
              placeholder="(555) 123-4567"
              keyboardType="phone-pad"
            />
            {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={[styles.input, errors.password ? styles.inputError : null]}
              value={password}
              onChangeText={setPassword}
              placeholder="Min 8 chars, 1 uppercase, 1 number"
              secureTextEntry
            />
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={[styles.input, errors.confirmPassword ? styles.inputError : null]}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Re-enter your password"
              secureTextEntry
            />
            {errors.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}
          </View>

          <TouchableOpacity
            style={[styles.button, isSubmitting ? styles.buttonDisabled : null]}
            onPress={handleSignup}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Sign Up</Text>
            )}
          </TouchableOpacity>

          <Link href="/(auth)/login" style={styles.link}>
            <Text style={styles.linkText}>Already have an account? Log In</Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  form: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 4,
  },
  errorGeneral: {
    color: '#e74c3c',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    backgroundColor: '#ffeaea',
    padding: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    marginTop: 16,
    alignSelf: 'center',
  },
  linkText: {
    color: '#2563eb',
    fontSize: 14,
  },
});
