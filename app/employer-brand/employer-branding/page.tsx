"use client";
import { EmployerBrandingGrid } from "@/app/data/EmployerBranding";
import EmployerBrandingCard from "@/app/component/EmployerBranding";
import EmployerBrandingStats from "@/app/component/EmployerBrandingStats";
import { EmployerBrandingStat } from "@/app/data/EmployerBrandingStat";
import { brands } from "@/app/data/brands";
import BrandGrid from "@/app/component/BrandGrid";
import Image from "next/image";
import { EmployerEVP } from "@/app/data/EmployerEVP";
import Testimonial from "@/app/component/Testimonial";
import BrandSection from "@/app/component/BrandSection";
import ContactDiv from "@/app/component/ContactDiv";
import Link from "next/link";
import { CONTACT } from "@/app/const/routes.const";

export default function ServicesSection() {
  return (
    <main>
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-14 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="w-full max-w-md h-[320px] md:h-[420px] relative rounded-xl overflow-hidden bg-purple-100 border border-gray-200 mx-auto md:mx-0 shadow-sm">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-purple-300 blur-2xl opacity-20"></div>

              {/* Image */}
              <Image
                src="/hero/laptop.png"
                alt="Employer branding digital experience"
                fill
                priority
                className="object-contain p-6"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="max-w-xl">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-700 mb-4 leading-snug">
                A Powerful Employer Brand
              </h1>

              <h2 className="text-base sm:text-lg md:text-xl text-yellow-500 font-medium mb-4">
                Where Current Stars Shine and Future Talent Flocks to Join
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                In a desert, when was the last time you witnessed a rose bloom?
                Just as rare, finding top talent requires nurturing the right
                environment. Our employer branding services transcend mere
                connections; they foster a bond where talent feels not just
                cared for, but truly valued and heard. We assist you in building
                resonance with your employees, both current and prospective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-gradient-to-r from-purple-900 via-gray-100 py-14 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 text-black">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold italic mb-6 leading-snug">
            We collaborate with you to bring your Employer Brand to life -
            inside and out - using global insights, in-depth research, and
            creative strategies to help you stand out and succeed in the race
            for top talent.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 leading-relaxed max-w-5xl mx-auto">
            In today’s hyper-competitive talent market, where growth,
            innovation, and culture have become overused promises, Vedant
            Innovision India helps organizations cut through the noise with
            employer branding that is authentic, distinctive, and deeply human.
            We’ve partnered with organizations across India to redefine their
            employer brands by aligning culture with the aspirations of top
            talent. Leveraging data-driven insights and creative storytelling,
            we craft strategies that attract, engage, and retain the best
            people—enhancing brand perception, strengthening employer-employee
            relationships, and helping our clients stand out in competitive
            markets.
          </p>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 leading-snug max-w-4xl mx-auto">
            As a leading employer branding agency in India, we believe a strong
            Employer Value Proposition (EVP) is more than a marketing
            statement—it’s the foundation of a powerful employer brand.
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-black mt-4 max-w-4xl mx-auto leading-relaxed">
            We help you craft and sustain a reputation that is authentic,
            data-driven, and designed to attract, recruit, retain, and inspire
            the right talent.
          </p>

          {/* MASONRY GRID */}
          <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {EmployerEVP.map((item) => (
              <div key={item.id} className="break-inside-avoid group">
                <div className="relative overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Overlay Label */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/70 px-4 py-2">
                    <p className="text-sm italic text-white">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-purple-700 font-semibold mb-4">
            Creating High-Impact Cultures and a Robust Employer Brands
          </h2>

          <p className="text-black max-w-7xl mb-12 leading-relaxed">
            We are an outcome-focused employer branding agency committed to
            delivering measurable results rooted in data and real business
            value. Working closely with you, we address your biggest challenges
            across culture, employer branding, and recruitment marketing—always
            with a forward-thinking approach.
          </p>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EmployerBrandingGrid.map((EmployerBranding, index) => (
              <EmployerBrandingCard key={index} {...EmployerBranding} />
            ))}
          </div>
        </div>
      </section>

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
