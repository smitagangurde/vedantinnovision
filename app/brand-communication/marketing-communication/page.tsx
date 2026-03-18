import Image from "next/image";

export default function MarketingCommunication() {
  return (
    <main className="bg-black text-white" role="main">
      <section className="w-full bg-black text-gray-300 py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-purple-900">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">
            Trusted by Leading Brands
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-4xl text-sm md:text-base mb-10">
            Since 2008, we’ve been creative partners to 100+ global brands and
            Fortune 500 companies, delivering 10,000+ projects.
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 border border-purple-900">
            {[
              "/Atlas Copco.jpg",
              "/Ferrero.jpg",
              "/Group Surya.jpg",
              "/Dan Foss.jpg",
              "/JSW Steel.jpg",
              "/Just Porta.jpg",
              "/Grass Roote.jpg",
              "/OP Mobility.jpg",
              "/WIKUS.jpg",
              "/Life Care.jpg",
              "/Atlas.jpg",
              "/Vastushaili.jpg",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-32 md:h-40 lg:h-44 p-4 border border-purple-900 bg-zinc-900 hover:border-yellow-400 transition duration-300"
              >
                <Image
                  src={logo}
                  alt="brand logo"
                  width={200}
                  height={100}
                  className="object-contain w-full h-full max-h-20 md:max-h-28 opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-t border-purple-900">
        <div className="bg-gradient-to-r from-purple-900 to-black py-14 sm:py-12 sm:py-14 md:py-16 lg:py-20 md:py-20 px-4 sm:px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold italic mb-8 leading-snug text-white">
              We&apos;re easy to talk to. Explore how we can work together!
            </h2>

            <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-300">
              <p>
                <a
                  href="mailto:hello@velocitindia.com"
                  className="underline hover:text-yellow-400 transition"
                >
                  hello@velocitindia.com
                </a>
              </p>

              <p className="text-sm opacity-70">Or</p>

              <p>
                <a
                  href="tel:+918956437437"
                  className="hover:text-yellow-400 transition"
                >
                  +91 8956 437 437
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="fixed right-0 top-2/4 -translate-y-1/2 z-50">
        <Link
          href={CONTACT}
          className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black text-sm md:text-base font-bold tracking-widest px-4 py-5 rounded-l-md shadow-lg hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div> */}
    </main>
  );
}
