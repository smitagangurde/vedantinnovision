import Image from "next/image";
import { ESBMRecruitment } from "@/app/data/EBSMPortfolio/ESBMRecruitment";

export default function SocialMediaServicesSection() {
  return (
    <section
      className="relative w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16"
      aria-labelledby="social-media-services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== Heading ===== */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h2
            id="social-media-services-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-700 leading-snug mb-4"
          >
            Full-Suite Brand Promotion & Outreach Services That Build Strong
            Market Presence
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
            Vedant Innovision delivers comprehensive brand promotion and
            outreach solutions designed to enhance your visibility, strengthen
            brand perception, and drive consistent engagement across platforms.
            Our approach goes beyond just increasing reach—we build a clear and
            compelling brand narrative aligned with your business goals,
            audience, and market positioning.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
            Through strategic content, consistent communication, and data-driven
            execution, we help your brand connect with the right audience, build
            credibility, and create long-term impact in a competitive landscape.
          </p>
        </header>

        {/* ===== Cards ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ESBMRecruitment.map((service, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-md transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 relative mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-purple-700 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-black leading-relaxed">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
