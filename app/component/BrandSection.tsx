import Image from "next/image";
import { brands } from "../data/brands";

export default function BrandSection() {
  return (
    <section
      className="w-full text-[var(--color-text-body)]"
      aria-labelledby="brands-heading"
    >
      {/* ── Stats ── */}
      <div
        style={{
          background:
            "linear-gradient(to right, var(--color-bg-career-footer-from), var(--color-bg-career-footer-via), var(--color-bg-career-footer-to))",
          paddingTop: "var(--section-py-base)",
          paddingBottom: "var(--section-py-base)",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto text-center"
        >
          <p
            style={{
              fontSize: "var(--text-body-base)",
              color: "var(--color-cpa-heading-text)",
            }}
            className="italic mb-8"
          >
            The numbers say it all!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div>
              <h3
                style={{
                  color: "var(--color-cpa-primary-text)",
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                }}
              >
                4+
              </h3>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-cpa-secondary-text)",
                }}
              >
                Years of experience
              </p>
            </div>

            <div
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
              className="sm:border-x"
            >
              <h3
                style={{
                  color: "var(--color-cpa-primary-text)",
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                }}
              >
                800+
              </h3>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-cpa-secondary-text)",
                }}
              >
                Projects delivered
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "var(--color-cpa-primary-text)",
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                }}
              >
                40+
              </h3>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-cpa-secondary-text)",
                }}
              >
                Satisfied clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Brands ── */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          paddingTop: "var(--section-py-base)",
          paddingBottom: "var(--section-py-base)",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto"
        >
          <h2
            id="brands-heading"
            style={{
              color: "var(--color-brand-primary)",
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-4 sm:text-3xl md:text-4xl"
          >
            Chosen by Brands That Build
          </h2>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
            }}
            className="mb-12 sm:text-base"
          >
            Since 2021, Vedant Innovision has delivered 800+ projects for 40+
            brands across branding, performance marketing, visual content,
            material supply, and IT solutions — focused on scalable execution
            and measurable ROI.
          </p>

          <div
            style={{ borderColor: "var(--color-border-image)" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border"
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                style={{ borderColor: "var(--color-border-image)" }}
                className="brand-card flex items-center justify-center p-4 sm:p-6 border bg-white transition duration-300"
              >
                <div className="relative w-[180px] h-[80px] sm:w-[200px] sm:h-[90px]">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain scale-110 transition duration-300"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}