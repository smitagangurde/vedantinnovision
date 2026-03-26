import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import OBFaqsSection from "@/app/component/OfficeBranding/OBFaqsSection";
import OBPortfolioSection from "@/app/component/OfficeBranding/OBPortfolioSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import Link from "next/link";
import Image from "next/image";
import OBAdvantageSection from "@/app/component/OfficeBranding/OBAdvantagesSection";

export default function OfficeBranding() {
  return (
    <main className="bg-black text-white" role="main">
      <section className="w-full bg-[var(--brand-black)] text-white py-8 md:py-10 border-b border-purple-900">
        <div className="max-w-7xl mx-auto grid items-center gap-10 px-4 sm:px-6 md:px-10 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/uiux.png"
              alt="Website and UI UX design"
              width={900}
              height={650}
              className="h-auto w-full max-w-[650px] object-contain"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--brand-purple)] leading-snug">
              Office Branding Agency
            </h1>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              At Velocitta Brands, we believe your workspace should be more than
              just a place to work; it should be a powerful physical
              manifestation of your brand’s soul. As a leading office branding
              agency, we specialize in turning corporate environments into
              inspiring, high-performance hubs through strategic design and
              storytelling
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full border-t border-purple-900">
        <div className="bg-gradient-to-r from-purple-900 to-black py-14 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold italic mb-6 leading-snug text-white">
              Why Choose a Specialized Workplace Branding Agency?
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
              In today’s competitive landscape, your office is your most
              significant touchpoint for both employees and clients. Choosing a
              dedicated <strong> workplace branding agency </strong> ensures
              that every square inch of your office reinforces your company
              values, boosts employee morale, and leaves a lasting impression on
              every visitor.
            </p>
          </div>
        </div>
      </section>

      <OBPortfolioSection />

      <OBAdvantageSection />

      <BrandSection />

      <Testimonial />

      <OBFaqsSection />

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
