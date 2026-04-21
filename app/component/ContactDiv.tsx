export default function ContactDiv() {
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
          className="mx-auto"
        >
          <p
            style={{
              fontSize: "var(--text-body-base)",
              fontWeight: "var(--font-weight-btn)",
              color: "var(--color-brand-primary)",
            }}
            className="mb-3"
          >
            Contact Us
          </p>

          <h2
            style={{
              fontSize: "var(--text-heading-md)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
            }}
            className="italic mb-6 leading-snug sm:text-xl md:text-3xl"
          >
            Ideas are easy. Execution is everything.
          </h2>

          <h2
            style={{
              fontSize: "var(--text-heading-md)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
            }}
            className="italic mb-6 leading-snug sm:text-xl md:text-3xl"
          >
            Let's build what your brand needs next!
          </h2>

          <div
            style={{ fontSize: "var(--text-body-sm)" }}
            className="space-y-3 sm:text-base md:text-lg"
          >
            <p>
              <a
                href="mailto:amitkumar@vedantinnovision.com"
                style={{ color: "var(--color-text-body)" }}
                className="underline contact-link transition"
              >
                amitkumar@vedantinnovision.com
              </a>
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="opacity-70"
            >
              Or
            </p>

            <p>
              <a
                href="tel:+919307267992"
                style={{ color: "var(--color-text-body)" }}
                className="contact-link transition"
              >
                +91 9307267992
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
