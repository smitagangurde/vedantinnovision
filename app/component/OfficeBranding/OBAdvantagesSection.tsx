import { OBAdvantages } from "@/app/data/OfficeBranding/OBAdvantages";

export default function BiComprehensive() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
        color: "var(--color-text-body)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "var(--section-px-sm)",
        paddingRight: "var(--section-px-sm)",
      }}
      className="w-full lg:px-10"
      aria-labelledby="services-heading"
    >
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
        {/* ── Heading ── */}
        <header className="max-w-5xl mb-12">
          <h2
            id="services-heading"
            style={{
              color: "var(--color-brand-primary)",
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="sm:text-3xl md:text-4xl"
          >
            The Vedant Innovision Advantage: Industrial &amp; Spatial Branding
            Solutions
          </h2>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
            }}
            className="mt-4 leading-relaxed sm:text-base"
          >
            As an experienced industrial and spatial branding partner, we offer
            a complete Concept-to-Execution approach—ensuring seamless
            coordination, consistent quality, and hassle-free implementation
            across all your branding requirements.
          </p>
        </header>

        {/* ── Grid ── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OBAdvantages.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                style={{ borderColor: "var(--color-border-image)" }}
                className="service-card bg-white border rounded-xl p-6 transition duration-300 shadow-sm"
              >
                <Icon
                  style={{ color: "var(--color-brand-primary)" }}
                  className="w-8 h-8 mb-4"
                />
                <h3
                  style={{
                    color: "var(--color-brand-primary)",
                    fontSize: "var(--text-heading-md)",
                    fontWeight: "var(--font-weight-heading)",
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
