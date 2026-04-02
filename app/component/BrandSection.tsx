import Image from "next/image";
import { brands } from "../data/brands";

export default function BrandSection() {
  return (
    <section
      className="bg-gradient-to-b from-gray-300 via-gray-100 to-white w-full text-black py-16 px-4 sm:px-6 lg:px-16"
      aria-labelledby="brands-heading"
    >
      <div className="max-w-5xl mx-auto text-center mb-28">
        <p className="text-base italic text-purple-600 mb-8">
          The numbers say it all!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-black">4+ </h3>
            <p className="text-black text-sm">Years of experience</p>
          </div>

          <div className="sm:border-x sm:border-gray-300">
            <h3 className="text-3xl font-semibold text-black">1000+</h3>
            <p className="text-black text-sm">Projects delivered</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-black">50+</h3>
            <p className="text-black text-sm">Satisfied clients</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          id="brands-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-4"
        >
          Trusted by Leading Brands
        </h2>

        {/* Description */}
        <p className="text-black max-w-7xl mb-12 text-sm sm:text-base">
          Since 2008, we’ve been creative partners to 100+ global brands and
          Fortune 500 companies, collaborating with businesses and delivering
          100+ projects.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-gray-300">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 sm:p-6 border border-gray-300 bg-white hover:bg-gray-100 transition duration-300"
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
