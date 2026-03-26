import Image from "next/image";
import { EBSMPortfolio } from "@/app/data/EBSMPortfolio/EBSMPortfolio";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  bg?: string; // ✅ optional field added
};

export default function EBSMPortfolioSection() {
  return (
    <section className="w-full bg-[var(--brand-black)] text-white pt-12 pb-10 md:pt-14 md:pb-12 border-b border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--brand-purple)] mb-3">
            Brands We Have Helped Strengthen Through Strategic Social Media
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(EBSMPortfolio as PortfolioItem[]).map((item, index: number) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-400 transition"
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