"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useOffline } from "@/hooks/use-offline";

interface PhotoCaptureProps {
  onCapture: (file: File) => void;
  disabled?: boolean;
  isUploading?: boolean;
}

export function PhotoCapture({ onCapture, disabled, isUploading }: PhotoCaptureProps) {
  const cameraRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const { isOnline } = useOffline();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      onCapture(file);
      e.target.value = "";
    }
  }

  return (
    <div className="space-y-2">
      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        ref={galleryRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => cameraRef.current?.click()}
          disabled={disabled || isUploading}
          isLoading={isUploading}
          className="min-h-[44px]"
        >
          Camera
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => galleryRef.current?.click()}
          disabled={disabled || isUploading}
          className="min-h-[44px]"
        >
          Gallery
        </Button>
      </div>

      {disabled && (
        <p className="text-sm text-gray-500">Maximum of 10 photos reached</p>
      )}
    </div>
  );
}
