import Image from "next/image";
import { FilmsPortfolio } from "@/app/data/Films/FilmsPortfolio";

export default function FilmsPortfolioSection() {
  return (
    <section
      className="w-full bg-black text-gray-300 py-16 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-purple-900"
      aria-labelledby="films-portfolio-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* ===== Heading (EXACT MATCH) ===== */}
        <div className="text-center mb-14">
          <h2
            id="films-portfolio-heading"
            className="text-2xl md:text-3xl font-semibold text-purple-400 italic mb-4"
          >
            {FilmsPortfolio.heading}
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            {FilmsPortfolio.description}
          </p>
        </div>

        {/* ===== Grid (MATCHED THEME) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FilmsPortfolio.films.map((item, index) => (
            <article
              key={index}
              className="border border-purple-900 bg-zinc-900 hover:border-yellow-400 transition overflow-hidden"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-sm md:text-base font-medium">
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