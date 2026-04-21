import Image from "next/image";
import { FilmsPortfolio } from "@/app/data/Films/FilmsPortfolio";

export default function FilmsPortfolioSection() {
  return (
    <section
      aria-labelledby="films-portfolio-heading"
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
        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h2
            id="films-portfolio-heading"
            style={{
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
            }}
            className="italic mb-4"
          >
            {FilmsPortfolio.heading}
          </h2>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-base)",
              maxWidth: "var(--hero-heading-max-width)",
            }}
            className="mx-auto leading-relaxed"
          >
            {FilmsPortfolio.description}
          </p>
        </div>

        {/* ===== Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FilmsPortfolio.films.map((item, index) => (
            <article
              key={index}
              style={{ borderColor: "var(--color-border-image)" }}
              className="portfolio-card border bg-white hover:shadow-md transition overflow-hidden rounded-lg"
            >
              {/* Image */}
              <div className="relative w-full h-[260px] md:h-[280px] lg:h-[300px] group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 p-4">
                  <h3
                    style={{ fontSize: "var(--text-body-sm)" }}
                    className="text-white font-medium"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
