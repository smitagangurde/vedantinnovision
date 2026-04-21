import Image from "next/image";
import { BITransformed } from "../data/BITransformed";

export default function BiTrasnformedSection() {
  return (
    <section
      aria-labelledby="portfolio-heading"
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
      {/* ===== HEADING ===== */}
      <div
        style={{ maxWidth: "var(--hero-heading-max-width)" }}
        className="mx-auto text-center mb-14"
      >
        <h2
          id="portfolio-heading"
          style={{
            fontSize: "var(--text-heading-xl)",
            fontWeight: "var(--font-weight-heading)",
            color: "var(--color-brand-primary)",
          }}
          className="mb-4"
        >
          Brands We've Worked With
        </h2>

        <p
          style={{
            color: "var(--color-text-body)",
            fontSize: "var(--text-body-base)",
          }}
          className="leading-relaxed"
        >
          We partner with businesses across industries to build strong,
          strategic brand identities. From manufacturing and FMCG to healthcare
          and educational institutes, we transform ideas into impactful brand
          experiences through thoughtful design and execution.
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div
        style={{ maxWidth: "var(--content-max-width)" }}
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
      >
        {BITransformed.map((item, index) => (
          <article
            key={index}
            style={{ borderColor: "var(--color-border-image)" }}
            className="portfolio-card group relative overflow-hidden rounded-md border bg-white/10 hover:shadow-lg transition duration-300"
          >
            {/* IMAGE / PREVIEW */}
            <div className="relative w-full aspect-square bg-white/10 flex items-center justify-center">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={`${item.name} brand preview`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                />
              ) : (
                <span
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "var(--text-body-sm)",
                  }}
                >
                  {item.name} Preview
                </span>
              )}
            </div>

            {/* LABEL */}
            <div
              style={{ fontSize: "var(--text-body-sm)" }}
              className="absolute bottom-0 left-0 w-full bg-black/70 text-white px-4 py-2"
            >
              {item.name}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
