import Image from "next/image";
import { OBPortfolios } from "@/app/data/OfficeBranding/OBPortfolios";

export default function OBPortfolioSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black pt-12 pb-10 md:pt-14 md:pb-12 border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-purple-700 mb-3">
            Proven Excellence: Portfolio of Our Office Branding Agency
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-black leading-relaxed mb-8 sm:mb-12">
          Our portfolio is a visual testament to how Vedant Innovision Brands, a
          premier office branding agency, transforms mundane workspaces into
          magnetic brand experiences. As a strategic workplace branding agency,
          we deliver custom office branding that goes beyond aesthetics to
          motivate teams and communicate your core values instantly.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {OBPortfolios.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-purple-400 transition shadow-sm"
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

              {/* Bottom Label */}
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
