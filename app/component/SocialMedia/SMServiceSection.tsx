import { SMService, whyPoints } from "@/app/data/SocialMedia/SMService";

export default function SMServicesSection() {
  return (
    <main>
      {/* ===== SERVICES SECTION ===== */}
      <section
        aria-labelledby="services-heading"
        className="w-full bg-[var(--brand-black)] text-white py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          {/* Heading */}
          <header className="text-center max-w-3xl mx-auto mb-12">
            <h2
              id="services-heading"
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--brand-purple)]"
            >
              Full-Suite Social Media Marketing Services in India That Deliver
              Real Results
            </h2>
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SMService.map((item, index) => (
              <article
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:border-[var(--brand-purple)] transition duration-300"
              >
                {/* Icon */}
                <div className="text-3xl mb-4 text-[var(--brand-purple)]">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-[var(--brand-purple)] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          {/* Heading */}
 <header className="text-center max-w-3xl mx-auto mt-10 md:mt-18 mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-4">
              Why We’re the Preferred Social Media Management Company in India
            </h2>

            <p className="text-sm text-white/70">
              Velocitta brings a sharp mix of creativity, consistency and
              platform expertise to every brand we work with.
            </p>
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((item, index) => (
              <article
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:border-[var(--brand-purple)] transition duration-300"
              >
                {/* Icon */}
                <div className="text-3xl mb-4 text-[var(--brand-purple)]">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-[var(--brand-purple)] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}
