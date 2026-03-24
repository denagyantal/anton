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
  Image,
  Alert,
} from 'react-native';
import { useAuth } from '../../src/contexts/auth-context';
import { apiClient } from '../../src/services/api-client';

type TradeType = 'HVAC' | 'PLUMBING' | 'ELECTRICAL';

const TRADES: { type: TradeType; label: string; icon: string }[] = [
  { type: 'HVAC', label: 'HVAC', icon: '🌡️' },
  { type: 'PLUMBING', label: 'Plumbing', icon: '🔧' },
  { type: 'ELECTRICAL', label: 'Electrical', icon: '⚡' },
];

interface FormErrors {
  businessName?: string;
  general?: string;
}

export default function OnboardingScreen() {
  const { user, refreshAccount } = useAuth();
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedTrade, setSelectedTrade] = useState<TradeType | null>(null);

  // Form fields
  const [businessName, setBusinessName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [contactEmail, setContactEmail] = useState(user?.email ?? '');
  const [contactPhone, setContactPhone] = useState('');
  const [logoUri, setLogoUri] = useState<string | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePickImage = async () => {
    try {
      const ImagePicker = await import('expo-image-picker');

      Alert.alert('Upload Logo', 'Choose a source', [
        {
          text: 'Camera',
          onPress: async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Permission needed', 'Camera permission is required to take photos.');
              return;
            }
            const result = await ImagePicker.launchCameraAsync({
              allowsEditing: true,
              quality: 0.8,
              aspect: [1, 1],
            });
            if (!result.canceled && result.assets[0]) {
              setLogoUri(result.assets[0].uri);
            }
          },
        },
        {
          text: 'Gallery',
          onPress: async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Permission needed', 'Gallery permission is required to select photos.');
              return;
            }
            const result = await ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
              quality: 0.8,
              aspect: [1, 1],
            });
            if (!result.canceled && result.assets[0]) {
              setLogoUri(result.assets[0].uri);
            }
          },
        },
        { text: 'Cancel', style: 'cancel' },
      ]);
    } catch {
      // expo-image-picker not available in this environment
      Alert.alert('Not available', 'Image picker is not available in this environment.');
    }
  };

  const handleContinue = () => {
    if (selectedTrade) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleComplete = async () => {
    const newErrors: FormErrors = {};
    if (!businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      // Upload logo if selected
      if (logoUri) {
        try {
          await apiClient.uploadFile<{ logoUrl: string }>(
            '/api/v1/accounts/me/logo',
            logoUri,
            'logo',
          );
        } catch {
          // Logo upload failure is non-blocking — continue with profile save
        }
      }

      // Update account profile
      await apiClient.patch('/api/v1/accounts/me', {
        businessName: businessName.trim(),
        licenseNumber: licenseNumber.trim() || undefined,
        contactEmail: contactEmail.trim() || undefined,
        contactPhone: contactPhone.trim() || undefined,
        tradeType: selectedTrade,
      });

      // Refresh account data so auth gate re-evaluates
      await refreshAccount();
    } catch (err) {
      setErrors({
        general: err instanceof Error ? err.message : 'Failed to save profile. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 1) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <Text style={styles.title}>What's your trade?</Text>
            <Text style={styles.subtitle}>Select your primary trade to get started</Text>

            <View style={styles.tradeCards}>
              {TRADES.map((trade) => (
                <TouchableOpacity
                  key={trade.type}
                  style={[
                    styles.tradeCard,
                    selectedTrade === trade.type && styles.tradeCardSelected,
                  ]}
                  onPress={() => setSelectedTrade(trade.type)}
                >
                  <Text style={styles.tradeIcon}>{trade.icon}</Text>
                  <Text
                    style={[
                      styles.tradeLabel,
                      selectedTrade === trade.type && styles.tradeLabelSelected,
                    ]}
                  >
                    {trade.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={[styles.button, !selectedTrade && styles.buttonDisabled]}
              onPress={handleContinue}
              disabled={!selectedTrade}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          <Text style={styles.title}>Business Profile</Text>
          <Text style={styles.subtitle}>Set up your business information</Text>

          {errors.general ? <Text style={styles.errorGeneral}>{errors.general}</Text> : null}

          <TouchableOpacity style={styles.logoButton} onPress={handlePickImage}>
            {logoUri ? (
              <Image source={{ uri: logoUri }} style={styles.logoImage} />
            ) : (
              <View style={styles.logoPlaceholder}>
                <Text style={styles.logoPlaceholderText}>+ Upload Logo</Text>
              </View>
            )}
          </TouchableOpacity>

          <View style={styles.field}>
            <Text style={styles.label}>Business Name *</Text>
            <TextInput
              style={[styles.input, errors.businessName ? styles.inputError : null]}
              value={businessName}
              onChangeText={setBusinessName}
              placeholder="Your Business Name"
              autoCapitalize="words"
            />
            {errors.businessName ? (
              <Text style={styles.errorText}>{errors.businessName}</Text>
            ) : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>License Number</Text>
            <TextInput
              style={styles.input}
              value={licenseNumber}
              onChangeText={setLicenseNumber}
              placeholder="e.g. LIC-12345"
              autoCapitalize="characters"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Contact Email</Text>
            <TextInput
              style={styles.input}
              value={contactEmail}
              onChangeText={setContactEmail}
              placeholder="business@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Contact Phone</Text>
            <TextInput
              style={styles.input}
              value={contactPhone}
              onChangeText={setContactPhone}
              placeholder="(555) 123-4567"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.completeButton, isSubmitting && styles.buttonDisabled]}
              onPress={handleComplete}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Complete Setup</Text>
              )}
            </TouchableOpacity>
          </View>
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
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  tradeCards: {
    gap: 16,
    marginBottom: 32,
  },
  tradeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 20,
  },
  tradeCardSelected: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  tradeIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  tradeLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  tradeLabelSelected: {
    color: '#2563eb',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoButton: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  logoPlaceholderText: {
    fontSize: 12,
    color: '#999',
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
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    flex: 1,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  completeButton: {
    flex: 2,
  },
});
