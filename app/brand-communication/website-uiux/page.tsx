import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import PortfolioSection from "@/app/component/PortfolioSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
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
    <main>
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 border-b border-purple-200">
        <div className="max-w-7xl mx-auto grid items-center gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/uiux.png"
              alt="Website and UI UX design"
              width={900}
              height={650}
              className="h-auto w-full max-w-[650px] object-contain opacity-90"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-400 leading-snug">
              Website &amp; UI/UX
            </h1>

            <p className="text-sm sm:text-base text-black leading-relaxed">
              Websites and UI/UX design hold the key to the amount of time your
              customers invest in your brand. With our extensive experience in
              crafting digital footprints for numerous brands, we possess the
              expertise to fashion the ideal, captivating online platform for
              your business.
            </p>

            <p className="mt-4 text-sm sm:text-base text-black leading-relaxed">
              Here’s a glimpse of our track record in helping clients showcase
              their unique brand narratives.
            </p>
          </div>
        </div>
      </section>

      <PortfolioSection />

      <BrandSection />

      <Testimonial />

      <ContactDiv />

      <div className="fixed right-0 top-2/4 -translate-y-1/2 z-50">
        <Link
          href={CONTACT}
          className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black text-xs md:text-sm font-semibold tracking-wide px-2 py-3 rounded-l-md shadow-md hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div>
    </main>
  );
}
