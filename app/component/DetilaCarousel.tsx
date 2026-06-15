"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DetailCarouselProps {
  images: string[];
  alt: string;
}

export default function DetailCarousel({ images, alt }: DetailCarouselProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length]);

  const goTo = (index: number) => {
    setCurrent(index);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  const validImages = images.filter(Boolean);
  if (validImages.length === 0) return null;

  return (
    <div className="relative w-full max-w-[600px] rounded-xl overflow-hidden shadow-lg">
      <div className="relative w-full aspect-[7/5]">
        {validImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`${alt} – slide ${i + 1}`}
              fill
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      {validImages.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {validImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                background:
                  i === current
                    ? "var(--color-brand-primary)"
                    : "rgba(255,255,255,0.7)",
                transform: i === current ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      )}

      {/* Prev / Next arrows */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={() =>
              goTo((current - 1 + validImages.length) % validImages.length)
            }
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 hover:bg-white transition text-lg font-bold"
            style={{ color: "var(--color-brand-primary)" }}
          >
            ‹
          </button>
          <button
            onClick={() => goTo((current + 1) % validImages.length)}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 hover:bg-white transition text-lg font-bold"
            style={{ color: "var(--color-brand-primary)" }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}