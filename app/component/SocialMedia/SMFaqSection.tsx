"use client";

import { useState } from "react";
import { SMFaqs } from "@/app/data/SocialMedia/SMFaqs";

export default function SMFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-[var(--brand-black)] border-t border-purple-900 py-16 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-8"
        >
          FAQ’s
        </h2>

        <div className="divide-y divide-white/10">
          {SMFaqs.map((faq, index: number) => {
            const isOpen = openIndex === index;

            return (
              <article key={index} className="py-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-white text-base md:text-lg font-medium">
                    {faq.question}
                  </h3>

                  <span className="ml-4 text-[var(--brand-purple)] text-xl transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-white/70 text-sm md:text-base pr-6">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
