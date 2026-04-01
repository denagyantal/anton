"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { compressImage } from "@/lib/image-compress";
import { Button } from "@/components/ui/button";

interface LogoUploadProps {
  currentLogoUrl?: string | null;
  onUploadComplete: (url: string) => void;
  onUploadError?: (error: string) => void;
}

export function LogoUpload({
  currentLogoUrl,
  onUploadComplete,
  onUploadError,
}: LogoUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentLogoUrl ?? null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    if (!file.type.startsWith("image/")) {
      const msg = "Please select an image file (JPG, PNG, WebP)";
      setError(msg);
      onUploadError?.(msg);
      return;
    }

    // Validate size (max 5MB before compression)
    if (file.size > 5 * 1024 * 1024) {
      const msg = "File size must be less than 5MB";
      setError(msg);
      onUploadError?.(msg);
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      // Compress client-side
      const compressed = await compressImage(file, {
        maxWidthOrHeight: 400,
        maxSizeKB: 200,
        quality: 0.85,
      });

      // Create preview
      const previewUrl = URL.createObjectURL(compressed);
      setPreview(previewUrl);

      // Upload to server
      const formData = new FormData();
      formData.append("file", compressed, file.name);
      formData.append("type", "logo");

      const res = await fetch("/api/photos/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Upload failed");
      }

      const json = await res.json();
      onUploadComplete(json.url);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      setError(msg);
      onUploadError?.(msg);
      setPreview(currentLogoUrl ?? null);
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-4">
        {preview ? (
          <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-gray-200">
            <Image
              src={preview}
              alt="Business logo"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
            <svg
              className="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <Button
            type="button"
            variant="outline"
            size="sm"
            isLoading={isUploading}
            onClick={() => fileInputRef.current?.click()}
          >
            {preview ? "Change logo" : "Upload logo"}
          </Button>
          {preview && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={() => {
                setPreview(null);
                onUploadComplete("");
              }}
            >
              Remove
            </Button>
          )}
          <p className="text-xs text-gray-400">PNG, JPG, WebP up to 5MB</p>
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
        aria-label="Upload business logo"
      />
    </div>
  );
}
