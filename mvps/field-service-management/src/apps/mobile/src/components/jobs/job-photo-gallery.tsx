import React from 'react';
import { View, Text, ScrollView, Image, Pressable, StyleSheet } from 'react-native';
import JobPhoto from '../../db/models/job-photo';

interface JobPhotoGalleryProps {
  photos: JobPhoto[];
  onAddPhoto: () => void;
}

function formatTime(ts: number | null): string {
  if (!ts) return '';
  return new Date(ts).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function JobPhotoGallery({ photos, onAddPhoto }: JobPhotoGalleryProps) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Pressable style={styles.addPhotoCard} onPress={onAddPhoto}>
          <Text style={styles.addPhotoIcon}>+</Text>
          <Text style={styles.addPhotoLabel}>Add Photo</Text>
        </Pressable>

        {photos.map((photo) => (
          <View key={photo.id} style={styles.thumbnailWrapper}>
            <View style={styles.thumbnailContainer}>
              <Image
                source={{ uri: photo.remoteUrl || photo.localUri }}
                style={styles.thumbnail}
                resizeMode="cover"
              />
              {photo.remoteUrl === '' && <View style={styles.pendingDot} />}
            </View>
            {photo.caption ? (
              <Text style={styles.captionText} numberOfLines={2}>
                {photo.caption}
              </Text>
            ) : null}
            <Text style={styles.timeText}>{formatTime(photo.takenAt)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  thumbnailWrapper: {
    width: 80,
    alignItems: 'center',
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
  captionText: {
    fontSize: 11,
    color: '#6b7280',
    maxWidth: 80,
    textAlign: 'center',
    marginTop: 4,
  },
  timeText: {
    fontSize: 11,
    color: '#6b7280',
    maxWidth: 80,
    textAlign: 'center',
    marginTop: 2,
  },
});
