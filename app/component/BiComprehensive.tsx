import { BIComprehensive } from "../data/BIComprehensive";

export default function BiComprehensive() {
  return (
    <section
      aria-labelledby="services-heading"
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
        <header
          style={{ maxWidth: "var(--hero-heading-max-width)" }}
          className="mb-12"
        >
          <h2
            id="services-heading"
            style={{
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
            }}
          >
            Complete Brand Strategy & Design Solutions Under One Roof
          </h2>
          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-base)",
            }}
            className="mt-4 leading-relaxed"
          >
            We offer end-to-end branding and design solutions—from strategy to
            execution—ensuring every touchpoint, digital or physical, is
            consistent, impactful, and aligned with your brand identity.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BIComprehensive.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                style={{ borderColor: "var(--color-border-image)" }}
                className="service-card border rounded-xl p-6 transition duration-300 group"
              >
                <Icon
                  className="w-8 h-8 mb-4"
                  style={{ color: "var(--color-brand-primary)" }}
                />

                <h3
                  style={{
                    fontSize: "var(--text-heading-md)",
                    fontWeight: "var(--font-weight-heading)",
                    color: "var(--color-brand-primary)",
                  }}
                  className="mb-2"
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "var(--color-text-body)",
                    fontSize: "var(--text-body-sm)",
                  }}
                  className="leading-relaxed"
                >
                  {service.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
