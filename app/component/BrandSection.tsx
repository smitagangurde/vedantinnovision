import Image from "next/image";
import { brands } from "../data/brands";

export default function BrandSection() {
  return (
    <section
      className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-16 border-t border-purple-900"
      aria-labelledby="brands-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          id="brands-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500 mb-4"
        >
          Trusted by Leading Brands
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-7xl mb-12 text-sm sm:text-base">
          Since 2008, we’ve been creative partners to 100+ global brands and
          Fortune 500 companies, collaborating with businesses and delivering
          10,000+ projects.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-purple-900">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 sm:p-6 border border-purple-900 bg-[#0f0f0f] hover:bg-[#1a1a1a] transition duration-300"
            >
              <div className="relative w-[180px] h-[80px] sm:w-[200px] sm:h-[90px]">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain scale-110 transition duration-300"
                  sizes="(max-width: 768px) 150px, 200px"
                />
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
