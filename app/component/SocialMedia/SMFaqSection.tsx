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
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
        color: "var(--color-text-body)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "var(--section-px-sm)",
        paddingRight: "var(--section-px-sm)",
      }}
      className="w-full lg:px-16"
    >
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
        {/* Heading */}
        <h2
          id="faq-heading"
          style={{
            fontSize: "var(--text-heading-xl)",
            fontWeight: "var(--font-weight-heading)",
            color: "var(--color-brand-primary)",
          }}
          className="mb-8"
        >
          FAQ's
        </h2>

        {/* FAQ List */}
        <div className="divide-y divide-black/10">
          {SMFaqs.map((faq, index: number) => {
            const isOpen = openIndex === index;

            return (
              <article key={index} className="py-5">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3
                    style={{
                      color: "var(--color-text-body)",
                      fontSize: "var(--text-body-base)",
                      fontWeight: "var(--font-weight-heading)",
                    }}
                  >
                    {faq.question}
                  </h3>

                  <span
                    style={{ color: "var(--color-brand-primary)" }}
                    className="ml-4 text-xl transition-transform duration-300"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p
                    style={{
                      color: "var(--color-text-body)",
                      fontSize: "var(--text-body-sm)",
                    }}
                    className="pr-6 leading-relaxed"
                  >
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
