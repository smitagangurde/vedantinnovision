import { SMService, whyPoints } from "@/app/data/SocialMedia/SMService";

export default function SMServicesSection() {
  return (
    <main>
      <section
        aria-labelledby="services-heading"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          color: "var(--color-text-body)",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="w-full py-12 md:py-16 md:px-10 lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto"
        >
          {/* ── Heading ── */}
          <header className="text-center max-w-3xl mx-auto mb-12">
            <h2
              id="services-heading"
              style={{
                color: "var(--color-brand-primary)",
                fontSize: "var(--text-heading-md)",
                fontWeight: "var(--font-weight-heading)",
              }}
              className="sm:text-2xl md:text-3xl"
            >
              End-to-End Social Media Marketing Services
            </h2>
          </header>

          {/* ── Services Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SMService.map((item, index) => (
              <article
                key={index}
                style={{ borderColor: "var(--color-border-image)" }}
                className="service-card bg-white rounded-xl p-6 border transition duration-300 shadow-sm"
              >
                <div
                  style={{
                    color: "var(--color-brand-primary)",
                    fontSize: "var(--text-heading-xl)",
                  }}
                  className="mb-4"
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    color: "var(--color-brand-primary)",
                    fontSize: "var(--text-body-sm)",
                    fontWeight: "var(--font-weight-heading)",
                  }}
                  className="mb-2 md:text-base"
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "var(--color-text-body)",
                    fontSize: "var(--text-body-sm)",
                  }}
                  className="leading-relaxed"
                >
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ── WHY CHOOSE US BLOCK ── */}
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto mt-12"
        >
          <header className="text-center max-w-3xl mx-auto mb-12">
            <h2
              style={{
                color: "var(--color-brand-primary)",
                fontSize: "var(--text-heading-md)",
                fontWeight: "var(--font-weight-heading)",
              }}
              className="mb-4 sm:text-2xl md:text-3xl"
            >
              Why Choose Vedant Innovision
            </h2>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Vedant Innovision combines creativity with consistency and
              platform expertise to deliver impactful social media results.
            </p>
          </header>

          {/* ── Why Points Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((item, index) => (
              <article
                key={index}
                style={{ borderColor: "var(--color-border-image)" }}
                className="service-card bg-white rounded-xl p-6 border transition duration-300 shadow-sm"
              >
                <div
                  style={{
                    color: "var(--color-brand-primary)",
                    fontSize: "var(--text-heading-xl)",
                  }}
                  className="mb-4"
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    color: "var(--color-brand-primary)",
                    fontSize: "var(--text-body-sm)",
                    fontWeight: "var(--font-weight-heading)",
                  }}
                  className="mb-2 md:text-base"
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "var(--color-text-body)",
                    fontSize: "var(--text-body-sm)",
                  }}
                  className="leading-relaxed"
                >
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
