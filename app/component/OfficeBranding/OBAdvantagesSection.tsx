import { OBAdvantages } from "@/app/data/OfficeBranding/OBAdvantages";

export default function BiComprehensive() {
  return (
    <section
      className="w-full bg-[var(--brand-black)] text-white py-16"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <header className="max-w-5xl mb-12">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--brand-purple)]"
          >
            The Velocitta Advantage: Your Expert Office Branding Company
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            As an established <strong>office branding company</strong>, we provide a “Concept to
            Execution” model that eliminates the stress of vendor management:
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OBAdvantages.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="border border-white/10 rounded-xl p-6 hover:border-[var(--brand-purple)] transition duration-300 group"
              >
                <Icon className="w-8 h-8 text-[var(--brand-purple)] mb-4" />

                <h3 className="text-lg font-semibold text-[var(--brand-purple)] mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {service.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
