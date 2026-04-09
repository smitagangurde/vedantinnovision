import Image from "next/image";
import { BITransformed } from "../data/BITransformed";

export default function BiTrasnformedSection() {
  return (
    <section
      aria-labelledby="portfolio-heading"
      className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black pt-12 pb-8 md:pt-16 md:pb-10"
    >
      {/* ===== HEADING ===== */}
      <div className="max-w-4xl mx-auto text-center mb-14 px-6 sm:px-8">
        <h2
          id="portfolio-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 mb-4"
        >
          Brands We’ve Worked With
        </h2>

        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
          We partner with businesses across industries to build strong,
          strategic brand identities. From manufacturing and FMCG to healthcare
          and educational institutes, we transform ideas into impactful brand
          experiences through thoughtful design and execution.
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {BITransformed.map((item, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-md border border-gray-300 bg-white/10 hover:border-purple-600 hover:shadow-lg transition duration-300"
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
