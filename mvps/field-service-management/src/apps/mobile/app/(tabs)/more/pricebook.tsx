import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SectionList,
  Alert,
} from 'react-native';
import { useDatabase } from '../../../src/contexts/database-context';
import { usePricebook } from '../../../src/hooks/use-pricebook';
import PricebookItemForm from '../../../src/components/pricebook/pricebook-item-form';
import PricebookItem from '../../../src/db/models/pricebook-item';
import { centsToDollars } from '@field-service/shared';

const UNIT_TYPE_LABELS: Record<string, string> = {
  EACH: 'each',
  HOUR: '/hr',
  FLAT: 'flat',
};

export default function PricebookScreen() {
  const database = useDatabase();
  const { items, categories, isLoading } = usePricebook();
  const [formVisible, setFormVisible] = useState(false);
  const [editingItem, setEditingItem] = useState<PricebookItem | null>(null);

  const sections = categories.map((category) => ({
    title: category,
    data: items.filter((item) => item.category === category),
  }));

  const handleAdd = useCallback(() => {
    setEditingItem(null);
    setFormVisible(true);
  }, []);

  const handleEdit = useCallback((item: PricebookItem) => {
    setEditingItem(item);
    setFormVisible(true);
  }, []);

  const handleDelete = useCallback(
    (item: PricebookItem) => {
      Alert.alert(
        'Remove Item',
        `Are you sure you want to remove "${item.name}"?`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Remove',
            style: 'destructive',
            onPress: async () => {
              await database.write(async () => {
                await item.update((record) => {
                  record.isActive = false;
                });
              });
            },
          },
        ],
      );
    },
    [database],
  );

  const handleSave = useCallback(
    async (data: {
      category: string;
      name: string;
      description: string;
      unitPrice: number;
      unitType: string;
    }) => {
      if (editingItem) {
        await database.write(async () => {
          await editingItem.update((record) => {
            record.category = data.category;
            record.name = data.name;
            record.description = data.description;
            record.unitPrice = data.unitPrice;
            record.unitType = data.unitType;
          });
        });
      } else {
        const collection = database.get<PricebookItem>('pricebook_items');
        await database.write(async () => {
          await collection.create((record) => {
            record.accountId = '';
            record.category = data.category;
            record.name = data.name;
            record.description = data.description;
            record.unitPrice = data.unitPrice;
            record.unitType = data.unitType;
            record.isActive = true;
            record.sortOrder = items.length;
          });
        });
      }
      setFormVisible(false);
      setEditingItem(null);
    },
    [database, editingItem, items.length],
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Text style={styles.loadingText}>Loading pricebook...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionCount}>{section.data.length} items</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemRow}
            onPress={() => handleEdit(item)}
            onLongPress={() => handleDelete(item)}
          >
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
            <Text style={styles.emptyText}>No pricebook items yet.</Text>
            <Text style={styles.emptySubtext}>Tap + to add your first item.</Text>
          </View>
        }
        stickySectionHeadersEnabled
      />

      <TouchableOpacity style={styles.fab} onPress={handleAdd}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <PricebookItemForm
        visible={formVisible}
        onClose={() => {
          setFormVisible(false);
          setEditingItem(null);
        }}
        onSave={handleSave}
        initialValues={
          editingItem
            ? {
                category: editingItem.category,
                name: editingItem.name,
                description: editingItem.description,
                unitPrice: editingItem.unitPrice,
                unitType: editingItem.unitType,
              }
            : undefined
        }
        existingCategories={categories}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#495057',
    textTransform: 'uppercase',
  },
  sectionCount: {
    fontSize: 12,
    color: '#999',
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
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  fabText: {
    fontSize: 28,
    color: '#fff',
    lineHeight: 30,
  },
});
