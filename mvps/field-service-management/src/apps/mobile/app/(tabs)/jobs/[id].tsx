import React, { useState, useCallback, useRef, useEffect, useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Animated,
  Modal,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import { useJob, useTransitionJobStatus, useUpdateJobNotes } from '../../../src/hooks/use-jobs';
import { useJobInvoice, useGenerateInvoice, useSendInvoice, useCollectPayment } from '../../../src/hooks/use-invoices';
import { NetworkContext } from '../../../src/contexts/network-context';
import { useCustomers } from '../../../src/hooks/use-customers';
import {
  useJobPhotos,
  useAddJobPhoto,
  useUpdateJobSignature,
} from '../../../src/hooks/use-job-photos';
import { JobPhotoGallery } from '../../../src/components/jobs/job-photo-gallery';
import JobStatusBadge from '../../../src/components/jobs/job-status-badge';
import SignatureCanvas, { SignatureViewRef } from 'react-native-signature-canvas';

const SIGNATURE_ELIGIBLE_STATUSES = ['SCHEDULED', 'IN_PROGRESS', 'COMPLETE'];

function formatDate(timestamp: number | null): string {
  if (!timestamp) return '';
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function formatTimeRange(start: number | null, end: number | null): string {
  if (!start) return '';
  const s = new Date(start);
  const e = end ? new Date(end) : null;
  const fmt = (d: Date) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return e ? `${fmt(s)} – ${fmt(e)}` : fmt(s);
}

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { job, isLoading } = useJob(id ?? '');
  const { customers } = useCustomers();
  const { transitionStatus } = useTransitionJobStatus();
  const { updateNotes } = useUpdateJobNotes();
  const { photos } = useJobPhotos(id ?? '');
  const { addPhoto } = useAddJobPhoto();
  const { updateSignature } = useUpdateJobSignature();
  const { invoice } = useJobInvoice(id ?? '');
  const { generateInvoice, isLoading: isGenerating } = useGenerateInvoice();
  const { sendInvoice, isSending } = useSendInvoice();
  const { isConnected } = useContext(NetworkContext);

  const [localNotes, setLocalNotes] = useState('');
  const [signatureVisible, setSignatureVisible] = useState(false);
  const savedOpacity = useRef(new Animated.Value(0)).current;
  const signatureRef = useRef<SignatureViewRef>(null);

  useEffect(() => {
    if (job) {
      setLocalNotes(job.notes ?? '');
    }
  }, [job?.id]);

  const customerName =
    customers.find((c) => c.id === job?.customerId)?.name ?? 'Unknown Customer';

  const handleBlur = useCallback(async () => {
    if (!job) return;
    await updateNotes(job.id, localNotes);
    savedOpacity.setValue(1);
    Animated.timing(savedOpacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [job, localNotes, updateNotes, savedOpacity]);

  const handleTransition = useCallback(
    async (newStatus: string) => {
      if (!job) return;
      await transitionStatus(job.id, newStatus);
    },
    [job, transitionStatus],
  );

  const handleAddPhoto = useCallback(async () => {
    if (!job) return;
    await addPhoto(job.id);
  }, [job, addPhoto]);

  const handleSignatureOK = useCallback(
    async (signature: string) => {
      if (!job) return;
      const dir = FileSystem.documentDirectory + 'signatures/';
      await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
      const path = dir + job.id + '.png';
      await FileSystem.writeAsStringAsync(
        path,
        signature.replace('data:image/png;base64,', ''),
        { encoding: FileSystem.EncodingType.Base64 },
      );
      await updateSignature(job.id, path);
      setSignatureVisible(false);
    },
    [job, updateSignature],
  );

  const handleGenerateInvoice = useCallback(async () => {
    if (!job) return;
    try {
      await generateInvoice(job.id);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to generate invoice';
      Alert.alert('Invoice Error', message);
    }
  }, [job, generateInvoice]);

  const handleSendInvoice = useCallback(async () => {
    if (!invoice) return;
    try {
      await sendInvoice(invoice.id);
      Alert.alert('Invoice Sent', 'Payment link sent to customer via SMS.');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send invoice';
      Alert.alert('Send Error', message);
    }
  }, [invoice, sendInvoice]);

  const handleCollectPayment = useCallback(() => {
    if (!invoice) return;
    if (!isConnected) {
      Alert.alert('Collect Payment', 'An internet connection is required to process card payments.');
      return;
    }
    router.push({
      pathname: '/(modals)/payment',
      params: {
        invoiceId: invoice.id,
        invoiceTotal: String(invoice.total),
      },
    });
  }, [invoice, isConnected]);

  function renderActionButton() {
    if (!job) return null;
    if (job.status === 'QUOTED' || job.status === 'SCHEDULED') {
      return (
        <TouchableOpacity
          style={[styles.actionButton, styles.startButton]}
          onPress={() => handleTransition('IN_PROGRESS')}
        >
          <Text style={styles.startButtonText}>Start Job</Text>
        </TouchableOpacity>
      );
    }
    if (job.status === 'IN_PROGRESS') {
      return (
        <TouchableOpacity
          style={[styles.actionButton, styles.completeButton]}
          onPress={() => handleTransition('COMPLETE')}
        >
          <Text style={styles.completeButtonText}>Complete Job</Text>
        </TouchableOpacity>
      );
    }
    if (job.status === 'COMPLETE' || job.status === 'INVOICED') {
      if (invoice) {
        const isPaid = invoice.status === 'PAID';
        const statusLabel =
          invoice.status === 'PAID' ? ' · PAID' :
          invoice.status === 'SENT' ? ' · SENT' :
          invoice.status === 'VIEWED' ? ' · VIEWED' :
          invoice.status === 'PARTIALLY_PAID' ? ' · PARTIAL' :
          invoice.status === 'OVERDUE' ? ' · OVERDUE' : '';

        return (
          <View>
            {invoice.status === 'DRAFT' ? (
              <TouchableOpacity
                style={[styles.actionButton, styles.sendInvoiceButton]}
                onPress={handleSendInvoice}
                disabled={isSending}
              >
                {isSending
                  ? <ActivityIndicator color="#fff" />
                  : <Text style={styles.sendInvoiceButtonText}>Send Invoice</Text>}
              </TouchableOpacity>
            ) : null}
            <View style={[styles.invoicedBadge, isPaid && styles.invoicedBadgePaid]}>
              <Text style={[styles.invoicedText, isPaid && styles.invoicedTextPaid]}>
                {invoice.invoiceNumber ?? 'Invoice'} — ${(invoice.total / 100).toFixed(2)}{statusLabel}
              </Text>
            </View>
            {!isPaid ? (
              <TouchableOpacity
                style={[styles.actionButton, styles.collectPaymentButton]}
                onPress={handleCollectPayment}
              >
                <Text style={styles.collectPaymentButtonText}>Collect Payment</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        );
      }
      return (
        <TouchableOpacity
          style={[styles.actionButton, styles.invoiceButton]}
          onPress={handleGenerateInvoice}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.invoiceButtonText}>Generate Invoice</Text>
          )}
        </TouchableOpacity>
      );
    }
    return null;
  }

  if (isLoading || !job) {
    return (
      <>
        <Stack.Screen options={{ title: 'Job Detail' }} />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2563eb" />
        </View>
      </>
    );
  }

  const timeRange = formatTimeRange(job.scheduledStart, job.scheduledEnd);
  const completedDate =
    (job.status === 'COMPLETE' || job.status === 'INVOICED') && job.completedAt
      ? formatDate(job.completedAt)
      : null;

  const showSignatureButton = SIGNATURE_ELIGIBLE_STATUSES.includes(job.status);

  return (
    <>
      <Stack.Screen options={{ title: job.title ?? 'Job Detail' }} />
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <View style={styles.badgeRow}>
            <JobStatusBadge status={job.status} />
          </View>
          <Text style={styles.customerName}>{customerName}</Text>
          {timeRange ? <Text style={styles.timeRange}>{timeRange}</Text> : null}
          {completedDate ? (
            <Text style={styles.completedAt}>Completed: {completedDate}</Text>
          ) : null}
        </View>

        {/* Photos section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <JobPhotoGallery photos={photos} onAddPhoto={handleAddPhoto} />
        </View>

        {/* Signature section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Signature</Text>
          {job.signatureUrl ? (
            <Image
              source={{ uri: job.signatureUrl }}
              style={styles.signaturePreview}
              resizeMode="contain"
            />
          ) : null}
          {showSignatureButton ? (
            <TouchableOpacity
              style={styles.signatureButton}
              onPress={() => setSignatureVisible(true)}
            >
              <Text style={styles.signatureButtonText}>
                {job.signatureUrl ? 'Re-capture Signature' : 'Capture Signature'}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <TextInput
            style={styles.notesInput}
            multiline
            value={localNotes}
            onChangeText={setLocalNotes}
            onBlur={handleBlur}
            placeholder="Add job notes..."
            placeholderTextColor="#aaa"
          />
          <Animated.Text style={[styles.savedIndicator, { opacity: savedOpacity }]}>
            Saved
          </Animated.Text>
        </View>

        <View style={styles.actionsSection}>{renderActionButton()}</View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      <Modal
        visible={signatureVisible}
        animationType="slide"
        onRequestClose={() => setSignatureVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Customer Signature</Text>
            <TouchableOpacity onPress={() => setSignatureVisible(false)}>
              <Text style={styles.modalCancel}>✕ Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <SignatureCanvas
              ref={signatureRef}
              onOK={handleSignatureOK}
              onEmpty={() => undefined}
              backgroundColor="white"
              descriptionText=""
              webStyle="body { margin: 0; } canvas { width: 100% !important; height: 100% !important; }"
            />
          </View>
          <TouchableOpacity
            style={styles.saveSignatureButton}
            onPress={() => signatureRef.current?.readSignature()}
          >
            <Text style={styles.saveSignatureButtonText}>Save Signature</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  customerName: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
  },
  timeRange: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  completedAt: {
    fontSize: 13,
    color: '#888',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  signaturePreview: {
    width: '100%',
    height: 120,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  signatureButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#2563eb',
    alignItems: 'center',
  },
  signatureButtonText: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '600',
  },
  notesInput: {
    minHeight: 100,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    color: '#333',
    textAlignVertical: 'top',
  },
  savedIndicator: {
    marginTop: 6,
    fontSize: 13,
    color: '#16A34A',
    fontWeight: '500',
  },
  actionsSection: {
    padding: 16,
  },
  actionButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#2563EB',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  completeButton: {
    backgroundColor: '#16A34A',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  invoiceButton: {
    backgroundColor: '#7C3AED',
  },
  invoiceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  invoicedBadge: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    alignItems: 'center',
  },
  invoicedText: {
    fontSize: 15,
    color: '#374151',
    fontWeight: '600',
  },
  sendInvoiceButton: {
    backgroundColor: '#2563EB',
    marginTop: 8,
  },
  sendInvoiceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  collectPaymentButton: {
    backgroundColor: '#16A34A',
    marginTop: 8,
  },
  collectPaymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  invoicedBadgePaid: {
    backgroundColor: '#DCFCE7',
  },
  invoicedTextPaid: {
    color: '#15803D',
  },
  bottomPadding: {
    height: 32,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  modalCancel: {
    fontSize: 15,
    color: '#6b7280',
  },
  saveSignatureButton: {
    margin: 16,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#2563eb',
    alignItems: 'center',
  },
  saveSignatureButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
