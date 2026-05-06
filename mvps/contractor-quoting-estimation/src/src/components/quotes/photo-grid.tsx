"use client";

interface Photo {
  id: string;
  url: string;
  sortOrder: number;
}

interface PhotoGridProps {
  photos: Photo[];
  onRemove: (photoId: string) => void;
  isRemoving?: string | null;
}

export function PhotoGrid({ photos, onRemove, isRemoving }: PhotoGridProps) {
  if (photos.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-2">
      {photos.map((photo) => (
        <div key={photo.id} className="relative aspect-square">
          <img
            src={photo.url}
            alt="Job site photo"
            className="w-full h-full object-cover rounded"
          />
          <button
            type="button"
            aria-label="Remove photo"
            onClick={() => onRemove(photo.id)}
            disabled={isRemoving === photo.id}
            className="absolute -top-2 -right-2 bg-black/60 text-white rounded-full w-11 h-11 flex items-center justify-center text-sm min-h-[44px] min-w-[44px]"
          >
            {isRemoving === photo.id ? "…" : "×"}
          </button>
        </div>
      ))}
    </div>
  );
}
