import { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import {
  getTeamMembers,
  inviteTeamMember,
  removeTeamMember,
  type TeamMemberResponse,
  type PendingInvite,
} from '../../../src/services/api-client';

export default function TeamScreen() {
  const [members, setMembers] = useState<TeamMemberResponse[]>([]);
  const [pendingInvites, setPendingInvites] = useState<PendingInvite[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [inviteName, setInviteName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [invitePhone, setInvitePhone] = useState('');
  const [isInviting, setIsInviting] = useState(false);

  const loadTeam = useCallback(async () => {
    try {
      const data = await getTeamMembers();
      setMembers(data.members);
      setPendingInvites(data.pendingInvites);
    } catch {
      Alert.alert('Error', 'Could not load team members. Please try again.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      loadTeam();
    }, [loadTeam]),
  );

  async function handleInvite() {
    if (!inviteName.trim() || !inviteEmail.trim()) {
      Alert.alert('Missing Info', 'Name and email are required.');
      return;
    }
    setIsInviting(true);
    try {
      await inviteTeamMember({
        name: inviteName.trim(),
        email: inviteEmail.trim().toLowerCase(),
        phone: invitePhone.trim() || undefined,
      });
      Alert.alert('Invite Sent', `An invitation email has been sent to ${inviteEmail}.`);
      setShowInviteForm(false);
      setInviteName('');
      setInviteEmail('');
      setInvitePhone('');
      await loadTeam();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Could not send invite. Please try again.';
      Alert.alert('Invite Failed', message);
    } finally {
      setIsInviting(false);
    }
  }

  async function handleRemove(member: TeamMemberResponse) {
    Alert.alert(
      'Remove Team Member',
      `Remove ${member.name} from the account? They will lose access immediately.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            try {
              await removeTeamMember(member.id);
              await loadTeam();
            } catch (error: unknown) {
              const message = error instanceof Error ? error.message : 'Could not remove team member.';
              Alert.alert('Error', message);
            }
          },
        },
      ],
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              setIsRefreshing(true);
              loadTeam();
            }}
          />
        }
        ListHeaderComponent={
          <View>
            <Text style={styles.title}>Team</Text>
            {!showInviteForm ? (
              <TouchableOpacity style={styles.inviteButton} onPress={() => setShowInviteForm(true)}>
                <Text style={styles.inviteButtonText}>+ Invite Member</Text>
              </TouchableOpacity>
            ) : (
              <InviteForm
                name={inviteName}
                email={inviteEmail}
                phone={invitePhone}
                isSubmitting={isInviting}
                onChangeName={setInviteName}
                onChangeEmail={setInviteEmail}
                onChangePhone={setInvitePhone}
                onSubmit={handleInvite}
                onCancel={() => setShowInviteForm(false)}
              />
            )}
            <Text style={styles.sectionHeader}>Members ({members.length})</Text>
          </View>
        }
        renderItem={({ item }) => (
          <MemberRow member={item} onRemove={handleRemove} />
        )}
        ListFooterComponent={
          pendingInvites.length > 0 ? (
            <View>
              <Text style={styles.sectionHeader}>Pending Invites ({pendingInvites.length})</Text>
              {pendingInvites.map((invite) => (
                <PendingInviteRow key={invite.id} invite={invite} />
              ))}
            </View>
          ) : null
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No team members yet. Invite your first tech!</Text>
        }
      />
    </View>
  );
}

function MemberRow({
  member,
  onRemove,
}: {
  member: TeamMemberResponse;
  onRemove: (m: TeamMemberResponse) => void;
}) {
  return (
    <View style={styles.memberRow}>
      <View style={styles.memberInfo}>
        <Text style={styles.memberName}>{member.name}</Text>
        <Text style={styles.memberEmail}>{member.email}</Text>
        <Text style={[styles.memberRole, member.role === 'OWNER' ? styles.ownerBadge : styles.memberBadge]}>
          {member.role}
        </Text>
      </View>
      {member.role === 'MEMBER' && (
        <TouchableOpacity onPress={() => onRemove(member)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

function PendingInviteRow({ invite }: { invite: PendingInvite }) {
  const expiresDate = new Date(invite.expiresAt).toLocaleDateString();
  return (
    <View style={styles.memberRow}>
      <View style={styles.memberInfo}>
        <Text style={styles.memberName}>{invite.name}</Text>
        <Text style={styles.memberEmail}>{invite.email}</Text>
        <Text style={styles.pendingLabel}>Invite pending · expires {expiresDate}</Text>
      </View>
    </View>
  );
}

function InviteForm({
  name, email, phone, isSubmitting,
  onChangeName, onChangeEmail, onChangePhone,
  onSubmit, onCancel,
}: {
  name: string;
  email: string;
  phone: string;
  isSubmitting: boolean;
  onChangeName: (v: string) => void;
  onChangeEmail: (v: string) => void;
  onChangePhone: (v: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}) {
  return (
    <View style={styles.inviteForm}>
      <Text style={styles.inviteFormTitle}>Invite Team Member</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name *"
        value={name}
        onChangeText={onChangeName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address *"
        value={email}
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone (optional)"
        value={phone}
        onChangeText={onChangePhone}
        keyboardType="phone-pad"
      />
      <View style={styles.inviteFormButtons}>
        <TouchableOpacity
          style={[styles.submitButton, isSubmitting && styles.buttonDisabled]}
          onPress={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>Send Invite</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel} disabled={isSubmitting}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 16 },
  sectionHeader: {
    fontSize: 13, fontWeight: '600', color: '#6b7280',
    paddingHorizontal: 24, paddingTop: 20, paddingBottom: 8,
    textTransform: 'uppercase', letterSpacing: 0.5, backgroundColor: '#f9fafb',
  },
  inviteButton: {
    marginHorizontal: 24, marginBottom: 8, paddingVertical: 12,
    backgroundColor: '#2563eb', borderRadius: 10, alignItems: 'center',
  },
  inviteButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  inviteForm: { marginHorizontal: 24, marginBottom: 12, padding: 16, backgroundColor: '#f9fafb', borderRadius: 12 },
  inviteFormTitle: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 12 },
  input: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#d1d5db',
    borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 8, fontSize: 16,
  },
  inviteFormButtons: { flexDirection: 'row', gap: 8, marginTop: 4 },
  submitButton: { flex: 1, paddingVertical: 10, backgroundColor: '#2563eb', borderRadius: 8, alignItems: 'center' },
  submitButtonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  cancelButton: { flex: 1, paddingVertical: 10, borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, alignItems: 'center' },
  cancelButtonText: { color: '#374151', fontSize: 15 },
  buttonDisabled: { opacity: 0.6 },
  memberRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 24, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#f0f0f0',
  },
  memberInfo: { flex: 1 },
  memberName: { fontSize: 16, fontWeight: '500', color: '#111827' },
  memberEmail: { fontSize: 14, color: '#6b7280', marginTop: 2 },
  memberRole: {
    fontSize: 12, fontWeight: '600', marginTop: 4, alignSelf: 'flex-start',
    paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4,
  },
  ownerBadge: { backgroundColor: '#fef3c7', color: '#92400e' },
  memberBadge: { backgroundColor: '#dbeafe', color: '#1e40af' },
  pendingLabel: { fontSize: 12, color: '#9ca3af', marginTop: 2 },
  removeButton: { paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: '#fca5a5', borderRadius: 6 },
  removeButtonText: { color: '#dc2626', fontSize: 14, fontWeight: '500' },
  emptyText: { textAlign: 'center', color: '#9ca3af', paddingTop: 32, paddingHorizontal: 24 },
});
