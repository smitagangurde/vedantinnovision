import Image from "next/image";
import { EBSMPortfolio } from "@/app/data/EBSMPortfolio/EBSMPortfolio";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  bg?: string;
};

export default function EBSMPortfolioSection() {
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
        borderBottom: "1px solid var(--color-border-image)",
      }}
      className="w-full lg:px-16"
    >
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
        {/* Heading */}
        <div
          style={{ maxWidth: "var(--hero-heading-max-width)" }}
          className="text-center mx-auto mb-12"
        >
          <h2
            style={{
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
            }}
            className="mb-3"
          >
            Brands We Have Helped Strengthen Through Strategic Social Media
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(EBSMPortfolio as PortfolioItem[]).map((item, index: number) => (
            <div
              key={index}
              style={{ borderColor: "var(--color-border-image)" }}
              className="portfolio-card group relative overflow-hidden rounded-xl bg-white border transition shadow-sm"
            >
              {/* Background Layer */}
              <div
                className={`absolute inset-0 ${
                  item.bg ? item.bg : ""
                } opacity-90`}
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

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 px-3 py-2">
                <p
                  style={{ fontSize: "var(--text-body-sm)" }}
                  className="font-medium text-white"
                >
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
