import React from 'react';
import { View, Text, ScrollView, Image, Pressable, StyleSheet } from 'react-native';
import QuotePhoto from '../../db/models/quote-photo';

interface QuotePhotoGalleryProps {
  photos: QuotePhoto[];
  onAddPhoto: () => void;
}

export function QuotePhotoGallery({ photos, onAddPhoto }: QuotePhotoGalleryProps) {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Add Photo card */}
        <Pressable style={styles.addPhotoCard} onPress={onAddPhoto}>
          <Text style={styles.addPhotoIcon}>+</Text>
          <Text style={styles.addPhotoLabel}>Add Photo</Text>
        </Pressable>

        {photos.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No photos yet</Text>
          </View>
        ) : (
          photos.map((photo) => (
            <View key={photo.id} style={styles.thumbnailContainer}>
              <Image
                source={{ uri: photo.remoteUrl || photo.localUri }}
                style={styles.thumbnail}
                resizeMode="cover"
              />
              {photo.remoteUrl === '' && <View style={styles.pendingDot} />}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 8,
  },
  addPhotoCard: {
    width: 80,
    height: 80,
    borderWidth: 1.5,
    borderColor: '#2563eb',
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
  },
  addPhotoIcon: {
    fontSize: 24,
    color: '#2563eb',
    fontWeight: '300',
  },
  addPhotoLabel: {
    fontSize: 11,
    color: '#2563eb',
    marginTop: 2,
  },
  emptyState: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  emptyStateText: {
    fontSize: 13,
    color: '#9ca3af',
  },
  thumbnailContainer: {
    position: 'relative',
    width: 80,
    height: 80,
    borderRadius: 6,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  pendingDot: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#eab308',
  },
});
