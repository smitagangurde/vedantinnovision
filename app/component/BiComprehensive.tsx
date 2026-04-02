import { BIComprehensive } from "../data/BIComprehensive";

export default function BiComprehensive() {
  return (
    <section
      className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <header className="max-w-5xl mb-12">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-600"
          >
            Comprehensive Brand Design Services Under One Roof
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-800 leading-relaxed">
            We provide a holistic suite of branding and identity design
            services, ensuring every touchpoint—from digital to print—is
            professional, polished, and aligned with your core values.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BIComprehensive.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="border border-gray-300 rounded-xl p-6 hover:border-purple-600 transition duration-300 group"
              >
                <Icon className="w-8 h-8 text-purple-600 mb-4" />

                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-800 text-sm leading-relaxed">
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
