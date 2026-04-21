import { processSteps } from "../data/Process";

export default function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
        color: "var(--color-text-body)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "var(--section-px-sm)",
        paddingRight: "var(--section-px-sm)",
        borderTop: "1px solid var(--color-border-image)",
      }}
      className="w-full lg:px-16"
    >
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
        {/* Heading */}
        <h2
          id="process-heading"
          style={{
            fontSize: "var(--text-heading-xl)",
            fontWeight: "var(--font-weight-heading)",
            color: "var(--color-brand-primary)",
          }}
          className="text-center mb-12"
        >
          Our Brand Strategy & Execution Process
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <article
              key={step.id}
              style={{ borderColor: "var(--color-brand-primary)" }}
              className="service-card group rounded-xl border bg-white p-6 sm:p-8 text-center hover:scale-[1.03] transition duration-300"
            >
              {/* Icon */}
              <div
                style={{ color: "var(--color-brand-primary)" }}
                className="text-3xl mb-4"
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "var(--text-heading-md)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="mb-3 leading-snug"
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="leading-relaxed"
              >
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
