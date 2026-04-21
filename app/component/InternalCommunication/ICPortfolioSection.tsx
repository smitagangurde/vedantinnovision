import Image from "next/image";
import { ICPortfolio } from "@/app/data/InternalCommunication/ICPortfolio";

export default function ICPortfolioSection() {
  return (
    <section
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
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ICPortfolio.map((item, index) => (
            <article
              key={index}
              style={{ borderColor: "var(--color-border-image)" }}
              className="portfolio-card relative group overflow-hidden rounded-lg border bg-white shadow-sm"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 w-full px-4 py-3">
                <p
                  style={{ fontSize: "var(--text-body-sm)" }}
                  className="text-white font-medium"
                >
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
