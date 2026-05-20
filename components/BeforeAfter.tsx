"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  labelBefore?: string;
  labelAfter?: string;
  alt?: string;
};

export function BeforeAfter({
  before,
  after,
  labelBefore = "Önce",
  labelAfter = "Sonra",
  alt = "Önce / sonra karşılaştırması"
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const updateFromX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [updateFromX]);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    updateFromX(e.clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 3));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 3));
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="slider"
      aria-label={alt}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-surface border border-border select-none touch-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <Image
        src={after}
        alt={`${alt} — ${labelAfter}`}
        fill
        sizes="(min-width: 1024px) 80vw, 100vw"
        className="object-cover pointer-events-none"
        priority
      />

      <div
        className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: `${position}%` }}
      >
        <div className="relative h-full w-screen max-w-none">
          <Image
            src={before}
            alt={`${alt} — ${labelBefore}`}
            fill
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ink/80 backdrop-blur border border-border text-[10px] uppercase tracking-[0.2em] text-cream/90">
        {labelBefore}
      </span>
      <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent text-ink text-[10px] uppercase tracking-[0.2em] font-medium">
        {labelAfter}
      </span>

      <div
        className="absolute inset-y-0 w-px bg-cream/90 pointer-events-none"
        style={{ left: `${position}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center w-12 h-12 rounded-full bg-accent text-ink shadow-2xl pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7 4L3 10L7 16M13 4L17 10L13 16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
