import Image from "next/image";
import { BITransformed } from "../data/BITransformed";

export default function BiTrasnformedSection() {
   return (
    <section
      aria-labelledby="portfolio-heading"
      className="w-full bg-[var(--brand-black)] text-white pt-12 pb-8 md:pt-16 md:pb-10"
    >
      {/* ===== HEADING ===== */}
      <div className="max-w-4xl mx-auto text-center mb-14 px-4 sm:px-6">
        <h2
          id="portfolio-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--brand-purple)] mb-4"
        >
          Brands We’ve Transformed
        </h2>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Witness the evolution of identity across industries. From Real
          Estate and Tech to FMCG and FinTech, we bring stories to life
          through impactful brand identity design.
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {BITransformed.map((item, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-md border border-gray-200/20 bg-white/5 hover:shadow-lg transition duration-300"
          >
            {/* IMAGE / PREVIEW */}
            <div className="relative w-full aspect-square bg-white/5 flex items-center justify-center">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={`${item.name} brand preview`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                />
              ) : (
                <span className="text-gray-500 text-sm">
                  {item.name} Preview
                </span>
              )}
            </div>

            {/* LABEL */}
            <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white px-4 py-2 text-sm">
              {item.name}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}