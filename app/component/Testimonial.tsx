"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
        color: "var(--color-text-body)",
      }}
      className="w-full"
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-12 py-16 min-h-[420px] flex flex-col justify-between"
        style={{ maxWidth: "72rem" }}
      >
        {/* ── TOP CONTENT ── */}
        <div>
          {/* Heading */}
          <h2
            style={{
              color: "var(--color-brand-primary)",
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="italic mb-6 sm:text-3xl lg:text-4xl"
          >
            World&apos;s leading brands have chosen us. Don&apos;t miss the bus.
          </h2>

          <p
            style={{
              color: "var(--color-brand-primary)",
              fontSize: "var(--text-body-sm)",
            }}
            className="mb-6"
          >
            Collaborate, today!
          </p>

          {/* ── QUOTE SLIDER ── */}
          <div className="min-h-[120px] overflow-hidden relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <p
                    style={{
                      color: "var(--color-text-body)",
                      fontSize: "var(--text-body-sm)",
                    }}
                    className="leading-relaxed sm:text-base max-w-3xl"
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM CONTENT ── */}
        <div className="mt-auto">
          {/* Profile */}
          <div className="flex items-center gap-6 mt-10">
            <Image
              src={current.logo}
              alt={current.role}
              width={50}
              height={50}
              className="object-contain"
            />

            <div
              style={{ borderColor: "var(--color-border-image)" }}
              className="border-l pl-4"
            >
              <p
                style={{
                  color: "var(--color-text-body)",
                  fontWeight: "var(--font-weight-heading)",
                }}
              >
                {current.name}
              </p>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="italic"
              >
                {current.role}
              </p>
            </div>
          </div>

          {/* ── Dots ── */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                style={{
                  backgroundColor:
                    i === index
                      ? "var(--color-brand-primary)"
                      : "var(--color-border-image)",
                }}
                className="w-3 h-3 rounded-full transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
