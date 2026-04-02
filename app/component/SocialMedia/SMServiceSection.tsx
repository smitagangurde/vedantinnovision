import { SMService, whyPoints } from "@/app/data/SocialMedia/SMService";

export default function SMServicesSection() {
  return (
    <main>
      <section
        aria-labelledby="services-heading"
        className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <header className="text-center max-w-3xl mx-auto mb-12">
            <h2
              id="services-heading"
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700"
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
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-400 transition duration-300 shadow-sm"
              >
                {/* Icon */}
                <div className="text-3xl mb-4 text-purple-700">{item.icon}</div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-purple-700 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* SECOND BLOCK */}
        <div className="max-w-7xl mx-auto mt-12">
          {/* Heading */}
          <header className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700 mb-4">
              Why We’re the Preferred Social Media Management Company in India
            </h2>

            <p className="text-sm text-black">
              Vedant Innovision brings a sharp mix of creativity, consistency
              and platform expertise to every brand we work with.
            </p>
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-400 transition duration-300 shadow-sm"
              >
                {/* Icon */}
                <div className="text-3xl mb-4 text-purple-700">{item.icon}</div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-purple-700 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black leading-relaxed">
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
