import Image from "next/image";
import { FilmsApproach } from "@/app/data/Films/FilmsApproach";

export default function FilmsApproachSection() {
  return (
    <section
      className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-4 sm:px-6 md:px-10 lg:px-16 "
      aria-labelledby="approach-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h2
            id="approach-heading"
            className="text-2xl md:text-3xl font-semibold text-purple-700 italic mb-4"
          >
            {FilmsApproach.heading}
          </h2>

          <div className="max-w-3xl mx-auto">
            {FilmsApproach.description.map((para, index) => (
              <p
                key={index}
                className="text-black text-sm md:text-base leading-relaxed mb-4"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FilmsApproach.cards.map((card, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-purple-400 hover:shadow-md transition duration-300"
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
              <h3 className="text-black text-sm md:text-base font-medium mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-black text-sm leading-relaxed">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
