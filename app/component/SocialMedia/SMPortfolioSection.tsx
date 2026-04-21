import Image from "next/image";
import { SMPortfolio } from "@/app/data/SocialMedia/SMPortfolio";

export default function SMPortfolioSection() {
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
      className="w-full py-12 sm:py-14 md:py-16 md:px-10 lg:px-16"
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
            See How We&apos;ve Helped Brands Grow with Data-Backed Strategies
          </h2>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SMPortfolio.map((item, index) => (
            <div
              key={index}
              style={{ borderColor: "var(--color-border-image)" }}
              className="group relative overflow-hidden rounded-xl bg-white border sm:portfolio-card transition shadow-sm"
            >
              {/* Background Layer */}
              <div
                className={`absolute inset-0 ${"bg" in item ? item.bg : ""} opacity-90`}
              />

              {/* Image */}
              <div className="relative p-5 sm:p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* ── Bottom Label ── */}
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
