"use client";

import { useRef, useState, useEffect } from "react";

interface SignaturePadProps {
  onSubmit: (signatureData: string) => Promise<void>;
  onCancel: () => void;
  signerName: string;
  isSubmitting: boolean;
}

const getCanvasPos = (canvas: HTMLCanvasElement, clientX: number, clientY: number) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY,
  };
};

export function SignaturePad({ onSubmit, onCancel, signerName, isSubmitting }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const [hasSignature, setHasSignature] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#111827";

    const startDraw = (x: number, y: number) => {
      isDrawingRef.current = true;
      lastPosRef.current = { x, y };
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const continueDraw = (x: number, y: number) => {
      if (!isDrawingRef.current || !lastPosRef.current) return;
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
      lastPosRef.current = { x, y };
      setHasSignature(true);
    };

    const stopDraw = () => {
      isDrawingRef.current = false;
      lastPosRef.current = null;
    };

    const onMouseDown = (e: MouseEvent) => {
      const pos = getCanvasPos(canvas, e.clientX, e.clientY);
      startDraw(pos.x, pos.y);
    };
    const onMouseMove = (e: MouseEvent) => {
      const pos = getCanvasPos(canvas, e.clientX, e.clientY);
      continueDraw(pos.x, pos.y);
    };
    const onMouseUp = () => stopDraw();
    const onMouseLeave = () => stopDraw();

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const pos = getCanvasPos(canvas, touch.clientX, touch.clientY);
      startDraw(pos.x, pos.y);
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const pos = getCanvasPos(canvas, touch.clientX, touch.clientY);
      continueDraw(pos.x, pos.y);
    };
    const onTouchEnd = () => stopDraw();

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!hasSignature) {
      setError("Please draw your signature before submitting");
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    setError(null);
    const signatureData = canvas.toDataURL("image/png");
    await onSubmit(signatureData);
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-xl border border-gray-200">
      <div>
        <p className="text-sm text-gray-500 mb-1">Signing as:</p>
        <p className="font-semibold text-gray-900">{signerName}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Draw your signature below:</p>
        <div className="border-2 border-gray-300 rounded-lg bg-gray-50 overflow-hidden">
          <canvas
            ref={canvasRef}
            width={600}
            height={200}
            className="w-full touch-none cursor-crosshair block"
            aria-label="Signature drawing area"
            role="img"
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">Draw your signature using your finger or mouse</p>
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert">{error}</p>
      )}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={clearCanvas}
          disabled={isSubmitting}
          className="flex-1 min-h-[44px] border border-gray-300 rounded-lg px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="flex-1 min-h-[44px] border border-gray-300 rounded-lg px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex-1 min-h-[44px] bg-green-600 text-white rounded-lg px-4 text-sm font-semibold hover:bg-green-700 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Signature"}
        </button>
      </div>
    </div>
  );
}
