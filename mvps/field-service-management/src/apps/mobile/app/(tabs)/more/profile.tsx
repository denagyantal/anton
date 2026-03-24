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
import { useAuth } from '../../../src/contexts/auth-context';
import { apiClient } from '../../../src/services/api-client';

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

export default function ProfileScreen() {
  const { account, refreshAccount } = useAuth();

  const [businessName, setBusinessName] = useState(account?.businessName ?? '');
  const [licenseNumber, setLicenseNumber] = useState(account?.licenseNumber ?? '');
  const [contactEmail, setContactEmail] = useState(account?.contactEmail ?? '');
  const [contactPhone, setContactPhone] = useState(account?.contactPhone ?? '');
  const [tradeType, setTradeType] = useState<TradeType | null>(
    (account?.tradeType as TradeType) ?? null,
  );
  const [logoUri, setLogoUri] = useState<string | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
      Alert.alert('Not available', 'Image picker is not available in this environment.');
    }
  };

  const handleSave = async () => {
    const newErrors: FormErrors = {};
    if (!businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    if (!tradeType) {
      newErrors.general = 'Please select a trade type';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage('');

    try {
      // Upload new logo if changed
      if (logoUri) {
        try {
          await apiClient.uploadFile<{ logoUrl: string }>(
            '/api/v1/accounts/me/logo',
            logoUri,
            'logo',
          );
        } catch {
          // Non-blocking
        }
      }

      await apiClient.patch('/api/v1/accounts/me', {
        businessName: businessName.trim(),
        licenseNumber: licenseNumber.trim() || undefined,
        contactEmail: contactEmail.trim() || undefined,
        contactPhone: contactPhone.trim() || undefined,
        tradeType,
      });

      await refreshAccount();
      setSuccessMessage('Profile updated successfully');
      setLogoUri(null);
    } catch (err) {
      setErrors({
        general: err instanceof Error ? err.message : 'Failed to save changes. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentLogoUrl = logoUri || account?.businessLogoUrl;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          <Text style={styles.title}>Business Profile</Text>

          {errors.general ? <Text style={styles.errorGeneral}>{errors.general}</Text> : null}
          {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}

          <TouchableOpacity style={styles.logoButton} onPress={handlePickImage}>
            {currentLogoUrl ? (
              <Image source={{ uri: currentLogoUrl }} style={styles.logoImage} />
            ) : (
              <View style={styles.logoPlaceholder}>
                <Text style={styles.logoPlaceholderText}>+ Upload Logo</Text>
              </View>
            )}
          </TouchableOpacity>

          <Text style={styles.sectionLabel}>Trade Type</Text>
          <View style={styles.tradeCards}>
            {TRADES.map((trade) => (
              <TouchableOpacity
                key={trade.type}
                style={[
                  styles.tradeCard,
                  tradeType === trade.type && styles.tradeCardSelected,
                ]}
                onPress={() => setTradeType(trade.type)}
              >
                <Text style={styles.tradeIcon}>{trade.icon}</Text>
                <Text
                  style={[
                    styles.tradeLabel,
                    tradeType === trade.type && styles.tradeLabelSelected,
                  ]}
                >
                  {trade.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

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

          <TouchableOpacity
            style={[styles.button, isSubmitting && styles.buttonDisabled]}
            onPress={handleSave}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Save Changes</Text>
            )}
          </TouchableOpacity>
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
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  tradeCards: {
    gap: 12,
    marginBottom: 24,
  },
  tradeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
  },
  tradeCardSelected: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  tradeIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  tradeLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  tradeLabelSelected: {
    color: '#2563eb',
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
  successMessage: {
    color: '#16a34a',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    backgroundColor: '#f0fdf4',
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
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
