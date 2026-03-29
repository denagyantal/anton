import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useQuotes } from '../../../../src/hooks/use-quotes';
import QuoteCard from '../../../../src/components/quotes/quote-card';
import Quote from '../../../../src/db/models/quote';

const STATUS_FILTERS = ['All', 'DRAFT', 'SENT', 'VIEWED', 'APPROVED', 'DECLINED', 'EXPIRED'];

export default function QuotesListScreen() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const statusFilter = selectedFilter === 'All' ? undefined : selectedFilter;
  const { quotes, isLoading } = useQuotes(statusFilter);

  const handleQuotePress = useCallback((quote: Quote) => {
    router.push(`/(tabs)/more/quotes/${quote.id}`);
  }, [router]);

  const handleCreateQuote = useCallback(() => {
    router.push('/(modals)/create-quote');
  }, [router]);

  const renderItem = useCallback(({ item }: { item: Quote }) => (
    <QuoteCard quote={item} onPress={handleQuotePress} />
  ), [handleQuotePress]);

  const keyExtractor = useCallback((item: Quote) => item.id, []);

  return (
    <View style={styles.container}>
      {/* Filter Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterBar}
        contentContainerStyle={styles.filterContent}
      >
        {STATUS_FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.chip,
              selectedFilter === filter && styles.chipActive,
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                styles.chipText,
                selectedFilter === filter && styles.chipTextActive,
              ]}
            >
              {filter === 'All' ? 'All' : filter.charAt(0) + filter.slice(1).toLowerCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Quotes List */}
      <FlatList
        data={quotes}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          !isLoading ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No quotes yet — tap + to create your first quote
              </Text>
            </View>
          ) : null
        }
      />

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={handleCreateQuote}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  filterBar: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    maxHeight: 52,
  },
  filterContent: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
  },
  chipActive: {
    backgroundColor: '#2563eb',
  },
  chipText: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '500',
  },
  chipTextActive: {
    color: '#fff',
  },
  list: {
    paddingVertical: 8,
  },
  emptyContainer: {
    padding: 48,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 15,
    color: '#999',
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 24,
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
    color: '#fff',
    fontSize: 28,
    fontWeight: '400',
    marginTop: -2,
  },
});
