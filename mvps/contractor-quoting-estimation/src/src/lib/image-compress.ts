"use client";

export interface CompressOptions {
  maxWidthOrHeight?: number;
  maxSizeKB?: number;
  quality?: number;
}

/**
 * Compress an image file on the client side using Canvas API.
 * Returns a new File with reduced dimensions/quality.
 */
export async function compressImage(
  file: File,
  options: CompressOptions = {}
): Promise<File> {
  const {
    maxWidthOrHeight = 1200,
    maxSizeKB = 500,
    quality = 0.85,
  } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);

      let { width, height } = img;

      // Scale down if needed
      if (width > maxWidthOrHeight || height > maxWidthOrHeight) {
        if (width > height) {
          height = Math.round((height * maxWidthOrHeight) / width);
          width = maxWidthOrHeight;
        } else {
          width = Math.round((width * maxWidthOrHeight) / height);
          height = maxWidthOrHeight;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Canvas toBlob failed"));
            return;
          }

          // Check size and reduce quality if needed
          if (blob.size > maxSizeKB * 1024 && quality > 0.3) {
            // Recursively compress with lower quality
            const reducedQuality = quality - 0.1;
            const newFile = new File([blob], file.name, { type: file.type });
            compressImage(newFile, { ...options, quality: reducedQuality })
              .then(resolve)
              .catch(reject);
          } else {
            const compressedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          }
        },
        file.type,
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Failed to load image"));
    };

    img.src = objectUrl;
  });
}
