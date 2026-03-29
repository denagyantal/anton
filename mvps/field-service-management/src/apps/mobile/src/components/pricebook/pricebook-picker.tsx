import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SectionList,
  Modal,
} from 'react-native';
import { usePricebook } from '../../hooks/use-pricebook';
import PricebookItem from '../../db/models/pricebook-item';
import { centsToDollars } from '@field-service/shared';

const UNIT_TYPE_LABELS: Record<string, string> = {
  EACH: 'each',
  HOUR: '/hr',
  FLAT: 'flat',
};

interface PricebookPickerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (item: PricebookItem) => void;
}

export default function PricebookPicker({ visible, onClose, onSelect }: PricebookPickerProps) {
  const { items, categories, isLoading } = usePricebook();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter((item) => item.name.toLowerCase().includes(query));
  }, [items, searchQuery]);

  const filteredCategories = useMemo(() => {
    const cats = [...new Set(filteredItems.map((item) => item.category))];
    return cats;
  }, [filteredItems]);

  const sections = filteredCategories.map((category) => ({
    title: category,
    data: filteredItems.filter((item) => item.category === category),
  }));

  const handleSelect = (item: PricebookItem) => {
    setSearchQuery('');
    onSelect(item);
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Select Item</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search items..."
            autoCorrect={false}
          />
        </View>

        {isLoading ? (
          <View style={styles.centered}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
            )}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemRow} onPress={() => handleSelect(item)}>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  {item.description ? (
                    <Text style={styles.itemDescription} numberOfLines={1}>
                      {item.description}
                    </Text>
                  ) : null}
                </View>
                <View style={styles.itemPrice}>
                  <Text style={styles.priceText}>${centsToDollars(item.unitPrice)}</Text>
                  <Text style={styles.unitTypeText}>
                    {UNIT_TYPE_LABELS[item.unitType] ?? item.unitType}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <View style={styles.centered}>
                <Text style={styles.emptyText}>
                  {searchQuery ? 'No matching items found.' : 'No pricebook items.'}
                </Text>
              </View>
            }
            stickySectionHeadersEnabled
            keyboardShouldPersistTaps="handled"
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  closeText: {
    fontSize: 16,
    color: '#2563eb',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
  sectionHeader: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#495057',
    textTransform: 'uppercase',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemInfo: {
    flex: 1,
    marginRight: 12,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
  },
  itemDescription: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  itemPrice: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563eb',
  },
  unitTypeText: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});
