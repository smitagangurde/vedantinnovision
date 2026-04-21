import Image from "next/image";
import { ESBMRecruitment } from "@/app/data/EBSMPortfolio/ESBMRecruitment";

export default function SocialMediaServicesSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
        color: "var(--color-text-body)",
        paddingLeft: "var(--section-px-sm)",
        paddingRight: "var(--section-px-sm)",
      }}
      className="relative w-full py-14 sm:py-16 md:py-20 md:px-10 lg:px-16"
      aria-labelledby="social-media-services-heading"
    >
      <div style={{ maxWidth: "var(--content-max-width)" }} className="mx-auto">
        {/* ── Heading ── */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h2
            id="social-media-services-heading"
            style={{
              color: "var(--color-brand-primary)",
              fontSize: "var(--text-heading-xl)",
              fontWeight: "var(--font-weight-heading)",
            }}
            className="leading-snug mb-4 sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Full-Suite Brand Promotion &amp; Outreach Services That Build Strong
            Market Presence
          </h2>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
            }}
            className="leading-relaxed sm:text-base md:text-lg"
          >
            Vedant Innovision delivers comprehensive brand promotion and
            outreach solutions designed to enhance your visibility, strengthen
            brand perception, and drive consistent engagement across platforms.
            Our approach goes beyond just increasing reach—we build a clear and
            compelling brand narrative aligned with your business goals,
            audience, and market positioning.
          </p>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
            }}
            className="leading-relaxed sm:text-base md:text-lg"
          >
            Through strategic content, consistent communication, and data-driven
            execution, we help your brand connect with the right audience, build
            credibility, and create long-term impact in a competitive landscape.
          </p>
        </header>

        {/* ── Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ESBMRecruitment.map((service, index) => (
            <article
              key={index}
              style={{ borderColor: "var(--color-border-image)" }}
              className="service-card bg-white border rounded-xl p-6 transition duration-300 shadow-sm"
            >
              <div className="w-12 h-12 relative mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3
                style={{
                  color: "var(--color-brand-primary)",
                  fontSize: "var(--text-body-base)",
                  fontWeight: "var(--font-weight-heading)",
                }}
                className="mb-2 md:text-lg"
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="leading-relaxed"
              >
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
