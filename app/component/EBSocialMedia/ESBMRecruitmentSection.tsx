import Image from "next/image";
import { ESBMRecruitment } from "@/app/data/EBSMPortfolio/ESBMRecruitment";

export default function SocialMediaServicesSection() {
  return (
    <section
      className="relative w-full bg-[var(--brand-black)] text-white py-14 sm:py-16 md:py-20 border-t border-purple-900"
      aria-labelledby="social-media-services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        
        {/* ===== Heading ===== */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h2
            id="social-media-services-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--brand-purple)] leading-snug mb-4"
          >
            Full-Suite Employer Brand & Recruitment Social Media Services That
            Build a World-Class Talent Presence
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
            Velocitta Brand Consultants delivers comprehensive employer-branding
            social media solutions tailored to elevate your reputation as a top
            workplace. Our data-driven approach does more than increase
            visibility; we shape a compelling talent narrative that reflects
            your culture, values, and employee experience. Through strategic
            storytelling, refined visual identity, and consistent employer brand
            positioning, we help you attract high-quality candidates with
            credibility, authenticity, and long-term talent impact.
          </p>
        </header>

        {/* ===== Cards ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ESBMRecruitment.map((service, index) => (
            <article
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[var(--brand-purple)] transition duration-300"
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
              <h3 className="text-base md:text-lg font-semibold text-[var(--brand-purple)] mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/70 leading-relaxed">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}