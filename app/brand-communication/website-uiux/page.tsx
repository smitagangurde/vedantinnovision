import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Suroj Buildcon",
    image: "/brand1.jpg",
    link: "/projects/suroj-buildcon",
  },
  {
    title: "Excelity",
    image: "/brand1.jpg",
    link: "/projects/excelity",
  },
  {
    title: "AEMA",
    image: "/brand1.jpg",
    link: "/projects/aema",
  },
  {
    title: "Kreative Booking",
    image: "/brand1.jpg",
    link: "/projects/kreative-booking",
  },
];
const brands = [
  "/amazon.webp",
  "/brand-2.png",
  "/brand-3.png",
  "/brand-4.png",
  "/brand-5.png",
  "/brand-6.png",
];

export default function WebsiteUiUxPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#1d2f5f]">
      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/uiux.png"
              alt="Website and UI UX design"
              width={900}
              height={650}
              className="h-auto w-full max-w-[700px] object-contain"
              priority
            />
          </div>

          <div className="max-w-xl">
            <h1 className="mb-4 text-3xl font-bold italic text-[#2049a8] sm:text-4xl lg:text-5xl">
              Website &amp; UI/UX
            </h1>

            <p className="text-base leading-8 text-[#23345f] sm:text-lg">
              Websites and UI/UX design hold the key to the amount of time your
              customers invest in your brand. With our extensive experience in
              crafting digital footprints for numerous brands, we possess the
              expertise to fashion the ideal, captivating online platform for
              your business.
            </p>

            <p className="mt-4 text-base leading-8 text-[#23345f] sm:text-lg">
              Here’s a glimpse of our track record in helping clients showcase
              their unique brand narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}

      <section className="pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={520}
                    className="w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/30"></div>
                </div>

                {/* Title */}
                <div className="bg-[#243746] px-4 py-3 transition duration-300 group-hover:bg-[#1b2c3a]">
                  <p className="text-xl italic text-white">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold italic text-[#2049a8] md:text-4xl">
            The numbers say it all!
          </h2>

          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f6f8fc] p-8 shadow-sm">
              <h3 className="text-4xl font-bold text-[#2049a8]">17+</h3>
              <p className="mt-3 text-lg text-[#23345f]">Years of experience</p>
            </div>

            <div className="rounded-2xl bg-[#f6f8fc] p-8 shadow-sm">
              <h3 className="text-4xl font-bold text-[#2049a8]">10,000+</h3>
              <p className="mt-3 text-lg text-[#23345f]">Projects delivered</p>
            </div>

            <div className="rounded-2xl bg-[#f6f8fc] p-8 shadow-sm">
              <h3 className="text-4xl font-bold text-[#2049a8]">5,000+</h3>
              <p className="mt-3 text-lg text-[#23345f]">Satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted brands */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold italic text-[#2049a8] md:text-4xl">
            Trusted by Leading Brands
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-center text-base leading-8 text-[#23345f] sm:text-lg">
            Since 2008, we’ve been creative partners to 100+ global brands and
            Fortune 500 companies, collaborated with numerous businesses and
            delivered 10,000+ projects.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex h-24 items-center justify-center rounded-2xl bg-white p-4 shadow-sm"
              >
                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  width={140}
                  height={60}
                  className="h-auto max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold italic text-[#2049a8] md:text-4xl">
            World’s leading brands have chosen us.
          </h2>
          <p className="mt-3 text-center text-lg text-[#23345f]">
            Collaborate, today!
          </p>

          <div className="mt-10 rounded-3xl bg-[#f6f8fc] p-8 shadow-sm md:p-10">
            <p className="text-lg leading-8 text-[#23345f]">
              “Honestly I don’t look at Velocita as simply being our agency.
              They’re more like partners who always have our best interests in
              mind. An excellent team, with fantastic support.”
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-[#d9e2f7]" />
              <div>
                <h3 className="font-semibold text-[#2049a8]">Eshan Sharma</h3>
                <p className="text-sm text-[#23345f]">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="rounded-3xl bg-[#2049a8] px-6 py-10 text-center text-white md:px-10 md:py-14">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-bold italic md:text-4xl">
              We&apos;re easy to talk to. Explore how we can work together!
            </h2>

            <div className="mt-8 space-y-3 text-lg">
              <p>Hello@VelocittaIndia.com</p>
              <p>+91 8956 437 437</p>
            </div>

            <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-[#2049a8] transition hover:opacity-90">
              Contact Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
