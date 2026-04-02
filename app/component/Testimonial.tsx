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
    <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16 min-h-[420px] flex flex-col justify-between">
        {/* TOP CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium italic text-purple-600 mb-6">
            World’s leading brands have chosen us. Don’t miss the bus.
          </h2>

          <p className="text-purple-500 mb-6">Collaborate, today!</p>

          {/* QUOTE SLIDER */}
          <div className="min-h-[120px] overflow-hidden relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <p className="text-black leading-relaxed text-sm sm:text-base max-w-3xl">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CONTENT */}
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

            <div className="border-l border-gray-300 pl-4">
              <p className="text-black font-medium">{current.name}</p>
              <p className="text-sm text-gray-600 italic">{current.role}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-purple-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
