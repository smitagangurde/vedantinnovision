import Image from "next/image";
import { brands } from "../data/brands";

export default function BrandSection() {
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
      className="w-full lg:px-16"
      aria-labelledby="brands-heading"
    >
      {/* ── STATS ── */}
      <div className="max-w-5xl mx-auto text-center mb-28">
        <p
          style={{
            color: "var(--color-brand-primary)",
            fontSize: "var(--text-body-base)",
          }}
          className="italic mb-8"
        >
          The numbers say it all!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div>
            <h3
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-heading-xl)",
                fontWeight: "var(--font-weight-heading)",
              }}
            >
              4+
            </h3>
            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Years of experience
            </p>
          </div>

          <div
            style={{ borderColor: "var(--color-border-image)" }}
            className="sm:border-x"
          >
            <h3
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-heading-xl)",
                fontWeight: "var(--font-weight-heading)",
              }}
            >
              800+
            </h3>
            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Projects delivered
            </p>
          </div>

          <div>
            <h3
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-heading-xl)",
                fontWeight: "var(--font-weight-heading)",
              }}
            >
              40+
            </h3>
            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
            >
              Satisfied clients
            </p>
          </div>
        </div>
      </div>

      {/* ── BRANDS ── */}
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
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
          material supply, and IT solutions — focused on scalable execution and
          measurable ROI.
        </p>

        {/* ── Grid ── */}
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
    </section>
  );
}
