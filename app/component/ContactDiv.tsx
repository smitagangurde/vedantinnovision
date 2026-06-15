"use client";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactDiv() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <section style={{ color: "var(--color-text-body)" }} className="w-full">
      <div
        style={{
          background:
            "linear-gradient(to right, var(--color-bg-career-footer-from), var(--color-bg-career-footer-via), var(--color-bg-career-footer-to))",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="sm:py-12 md:py-14 lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto flex flex-col md:flex-row gap-12 items-start"
        >
          {/* Left: Contact Info */}
          <div className="flex-1">
            <p
              style={{
                fontSize: "var(--text-heading-md)",
                fontWeight: "var(--font-weight-btn)",
                color: "var(--color-cpa-heading-text)",
              }}
              className="mb-3"
            >
              Contact Us
            </p>

            <h2
              style={{
                fontSize: "var(--text-heading-md)",
                fontWeight: "var(--font-weight-heading)",
                color: "var(--color-cpa-primary-text)",
              }}
              className="italic mb-6 leading-snug sm:text-xl md:text-3xl"
            >
              Ideas are easy. Execution is everything.
            </h2>

            <h2
              style={{
                fontSize: "var(--text-heading-md)",
                fontWeight: "var(--font-weight-heading)",
                color: "var(--color-cpa-primary-text)",
              }}
              className="italic mb-6 leading-snug sm:text-xl md:text-3xl"
            >
              {"Let's build what your brand needs next!"}
            </h2>

            <div
              style={{ fontSize: "var(--text-body-sm)" }}
              className="space-y-3 sm:text-base md:text-lg"
            >
              <p>
                <a
                  href="mailto:amitkumar@vedantinnovision.com"
                  style={{ color: "var(--color-cpa-primary-text)" }}
                  className="underline contact-link transition flex items-center gap-2"
                >
                  <Mail size={16} />
                  amitkumar@vedantinnovision.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919307267992"
                  style={{ color: "var(--color-cpa-primary-text)" }}
                  className="contact-link transition flex items-center gap-2"
                >
                  <Phone size={16} />
                  +91 9307267992
                </a>
              </p>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="flex-1 w-full">
            <h3
              style={{
                color: "var(--color-cpa-heading-text)",
                fontWeight: "var(--font-weight-btn)",
                fontSize: "var(--text-heading-md)",
              }}
              className="mb-4 text-sm"
            >
              Enquiry Form
            </h3>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                style={{
                  color: "var(--color-text-body)",
                  borderColor: "var(--color-border-image)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="footer-input w-full bg-white px-3 py-2 rounded focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email Id"
                required
                style={{
                  color: "var(--color-text-body)",
                  borderColor: "var(--color-border-image)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="footer-input w-full bg-white px-3 py-2 rounded focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Mobile No."
                required
                style={{
                  color: "var(--color-text-body)",
                  borderColor: "var(--color-border-image)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="footer-input w-full bg-white px-3 py-2 rounded focus:outline-none"
              />

              <textarea
                placeholder="Message"
                required
                style={{
                  color: "var(--color-text-body)",
                  borderColor: "var(--color-border-image)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="footer-input w-full bg-white px-3 py-2 rounded focus:outline-none"
              />

              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-cta-from), var(--color-cta-to))",
                  color: "var(--color-cta-text)",
                  fontSize: "var(--text-btn)",
                  fontWeight: "var(--font-weight-btn)",
                }}
                className="px-6 py-2 rounded hover:opacity-90 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
