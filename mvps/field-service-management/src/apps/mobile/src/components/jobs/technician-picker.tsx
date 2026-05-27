import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import TeamMember from '../../db/models/team-member';

interface TechnicianPickerProps {
  visible: boolean;
  teamMembers: TeamMember[];
  selectedId: string | null;
  onSelect: (member: TeamMember | null) => void;
  onClose: () => void;
}

export default function TechnicianPicker({
  visible,
  teamMembers,
  selectedId,
  onSelect,
  onClose,
}: TechnicianPickerProps) {
  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Assign Technician</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={[{ id: null, name: 'Unassigned', role: '' } as unknown as TeamMember, ...teamMembers]}
          keyExtractor={(item) => item.id ?? 'unassigned'}
          renderItem={({ item }) => {
            const isSelected = item.id === selectedId || (!item.id && !selectedId);
            return (
              <TouchableOpacity
                style={[styles.row, isSelected && styles.rowSelected]}
                onPress={() => {
                  onSelect(item.id ? item : null);
                  onClose();
                }}
              >
                <Text style={[styles.rowName, isSelected && styles.rowNameSelected]}>
                  {item.name}
                </Text>
                {item.id && (
                  <Text style={styles.rowRole}>{item.role}</Text>
                )}
                {isSelected && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: { fontSize: 18, fontWeight: '700', color: '#111827' },
  closeButton: { paddingHorizontal: 4 },
  closeText: { fontSize: 16, color: '#6b7280' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#fff',
  },
  rowSelected: { backgroundColor: '#eff6ff' },
  rowName: { flex: 1, fontSize: 16, color: '#111827' },
  rowNameSelected: { color: '#2563eb', fontWeight: '600' },
  rowRole: { fontSize: 13, color: '#9ca3af', marginRight: 8 },
  checkmark: { fontSize: 16, color: '#2563eb', fontWeight: '700' },
  separator: { height: 1, backgroundColor: '#f3f4f6', marginLeft: 20 },
});
