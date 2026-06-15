// @/app/component/AnimatedHeading.tsx
"use client";

import { useEffect, useState } from "react";

const headings = [
  "Infinite Solutions",
  "Creative Branding",
  "Digital Excellence",
  "Strategic Growth",
  "Powerful Storytelling",
];

export default function AnimatedHeading() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headings.length);
        setVisible(true); // fade in
      }, 400); // wait for fade out, then switch
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      style={{
        fontSize: "var(--text-hero-page-heading)",
        fontWeight: "var(--font-weight-heading)",
        color: "var(--color-brand-primary)",
        maxWidth: "var(--hero-heading-max-width)",
        textAlign: "var(--text-align-hero)" as React.CSSProperties["textAlign"],
        transition: "opacity 0.4s ease, transform 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-8px)",
      }}
      className="leading-tight sm:text-3xl md:text-5xl mb-8"
    >
      {headings[index]}
    </h1>
  );
}