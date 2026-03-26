import Image from "next/image";
import { FilmsApproach } from "@/app/data/Films/FilmsApproach";

export default function FilmsApproachSection() {
  return (
    <section
      className="w-full bg-black text-gray-300 py-16 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-purple-900"
      aria-labelledby="approach-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* ===== Heading (MATCHED) ===== */}
        <div className="text-center mb-14">
          <h2
            id="approach-heading"
            className="text-2xl md:text-3xl font-semibold text-purple-400 italic mb-4"
          >
            {FilmsApproach.heading}
          </h2>

          <div className="max-w-4xl mx-auto">
            {FilmsApproach.description.map((para, index) => (
              <p
                key={index}
                className="text-gray-400 text-sm md:text-base leading-relaxed mb-4"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ===== Cards (MATCHED GRID STYLE) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FilmsApproach.cards.map((card, index) => (
            <article
              key={index}
              className="border border-purple-900 bg-zinc-900 hover:border-yellow-400 transition p-6 text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 relative mx-auto mb-4">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-sm md:text-base font-medium mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}