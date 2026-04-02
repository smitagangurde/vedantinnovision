import Image from "next/image";
import { ICPortfolio } from "@/app/data/InternalCommunication/ICPortfolio";

export default function ICPortfolioSection() {
  return (
    <section
      className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black pt-12 pb-6 md:pt-14 md:pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ICPortfolio.map((item, index) => (
            <article
              key={index}
              className="relative group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
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
                <p className="text-white text-sm md:text-base font-medium">
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
