"use client";

import { useState } from "react";
import { ARFaqs } from "../data/ARFaqs";

type FAQ = {
  question: string;
  answer: string;
};

export default function ARFaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-[var(--brand-black)] border-t border-purple-900 py-16 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-10"
        >
          FAQ’s
        </h2>

        {/* FAQ List */}
        <div className="divide-y divide-white/10">
          {(ARFaqs as FAQ[]).map((faq, index: number) => {
            const isOpen = openIndex === index;

            return (
              <article key={index} className="py-5">
                
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-white text-base md:text-lg font-medium">
                    {faq.question}
                  </h3>

                  {/* Icon */}
                  <span
                    className={`ml-4 text-[var(--brand-purple)] text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-content-${index}`}
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