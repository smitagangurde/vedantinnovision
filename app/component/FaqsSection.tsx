"use client";

import { useState } from "react";
import { Faqs } from "../data/Faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white border-t border-gray-300 py-16 px-6 sm:px-8 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-semibold text-purple-600 mb-8"
        >
          FAQ’s
        </h2>

        <div className="divide-y divide-gray-400/20">
          {Faqs.map((faq, index: number) => {
            const isOpen = openIndex === index;

            return (
              <article key={index} className="py-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-black text-base md:text-lg font-medium">
                    {faq.question}
                  </h3>

                  <span
                    className={`ml-4 text-purple-600 text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-3" : "max-h-0"}`}
                >
                  <p className="text-gray-800 text-sm md:text-base pr-6">
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
