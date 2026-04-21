import Image from "next/image";
import { OBPortfolios } from "@/app/data/OfficeBranding/OBPortfolios";

export default function OBPortfolioSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
        color: "var(--color-text-body)",
        borderBottom: "1px solid var(--color-brand-primary)",
        paddingLeft: "var(--section-px-sm)",
        paddingRight: "var(--section-px-sm)",
      }}
      className="w-full pt-12 pb-10 md:pt-14 md:pb-12 md:px-10"
    >
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
        {/* ── Heading ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            style={{
              color: "var(--color-brand-primary)",
              fontSize: "var(--text-heading-md)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="mb-3 md:text-2xl"
          >
            Proven Execution: Our Industrial Branding Work
          </h2>
        </div>

        <p
          style={{
            color: "var(--color-text-body)",
            fontSize: "var(--text-body-sm)",
          }}
          className="leading-relaxed mb-8 sm:mb-12 sm:text-base"
        >
          Our portfolio reflects our expertise in transforming workplaces into
          impactful brand environments. At Vedant Innovision, we go beyond
          design—delivering end-to-end industrial and spatial branding solutions
          that combine strategy, creativity, and execution across factory
          branding, safety communication systems, signage solutions, and
          large-scale installations.
        </p>

        <p
          style={{
            color: "var(--color-text-body)",
            fontSize: "var(--text-body-sm)",
          }}
          className="leading-relaxed mb-8 sm:mb-12 sm:text-base"
        >
          From factory floors to corporate offices, we create spaces that
          communicate your brand clearly, improve functionality, and leave a
          lasting impression—ensuring every element is executed with precision,
          consistency, and on-ground expertise.
        </p>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {OBPortfolios.map((item, index) => (
            <div
              key={index}
              style={{ borderColor: "var(--color-border-image)" }}
              className="portfolio-card group relative overflow-hidden rounded-xl bg-white border transition shadow-sm"
            >
              <div
                className={`absolute inset-0 ${"bg" in item ? item.bg : ""} opacity-90`}
              />
              <div className="relative p-5 sm:p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black/70 px-3 py-2">
                <p className="text-xs sm:text-sm font-medium text-white">
                  {item.title}
                </p>
                {item.category && (
                  <p className="text-[10px] sm:text-xs text-white/60 italic">
                    {item.category}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
