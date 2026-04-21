import { steps, projects, stats } from "../data/BIDiscovery";

export default function BIDiscoverySection() {
  return (
    <section
      aria-labelledby="work-heading"
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
          className="mb-10"
        >
          <h2
            id="work-heading"
            style={{
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
            }}
          >
            Our Brand Strategy & Design Process
          </h2>
          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-base)",
            }}
            className="mt-4 leading-relaxed"
          >
            We combine strategic thinking with creative execution to deliver
            impactful and result-driven brand identities.
          </p>
        </header>

        {/* STEPS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <article
                key={i}
                style={{ borderColor: "var(--color-border-image)" }}
                className="service-card border rounded-xl p-6 transition duration-300"
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
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "var(--color-text-body)",
                    fontSize: "var(--text-body-sm)",
                  }}
                  className="leading-relaxed"
                >
                  {step.desc}
                </p>
              </article>
            );
          })}
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-10">
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="bg-white/10 rounded-lg h-28 flex items-center justify-center hover:bg-white/20 transition"
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
