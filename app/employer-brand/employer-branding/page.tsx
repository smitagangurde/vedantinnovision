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
                Corporate Branding Solutions
              </h1>

              <h2 className="text-base sm:text-lg md:text-xl text-yellow-500 font-medium mb-4">
                Build a Strong, Consistent Corporate Identity
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                At Vedant Innovision, we help businesses create a strong
                corporate brand that reflects their vision, values, and
                professionalism. A well-defined corporate identity ensures
                consistency across communication, builds credibility, and
                strengthens your market presence.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                We focus on aligning your brand strategy, visual identity, and
                communication to create a cohesive and impactful corporate
                image-both internally and externally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-gradient-to-r from-purple-900 via-gray-100 py-14 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 text-black">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold italic mb-6 leading-snug">
            We collaborate with you to build a unified corporate brand across
            all touchpoints—combining strategic thinking, structured design
            systems, and consistent communication to enhance brand perception
            and business growth.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 leading-relaxed max-w-5xl mx-auto">
            From brand positioning and visual identity to corporate
            communication and internal branding, we ensure your organization
            presents a clear, professional, and trusted image in the market.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 leading-relaxed max-w-5xl mx-auto">
            A strong corporate brand builds trust, improves recognition, and
            creates a consistent experience for clients, employees, and
            stakeholders—helping your business stand out and grow with
            confidence.
          </p>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 leading-snug max-w-4xl mx-auto">
            Build a Strong Corporate Brand Foundation
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-black mt-4 max-w-4xl mx-auto leading-relaxed">
            At Vedant Innovision, we believe a strong brand is built on clarity,
            consistency, and purpose. Your brand is more than just
            communication—it reflects your organization’s values, culture, and
            credibility in the market.
          </p>

          <p className="text-sm md:text-base text-black mt-4 max-w-4xl mx-auto leading-relaxed">
            We help you define and strengthen your brand foundation through
            strategic thinking, structured design, and consistent
            communication—ensuring your business attracts the right audience,
            builds trust, and sustains long-term growth.
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
            Building Strong Corporate Brands & Workplace Experiences
          </h2>

          <p className="text-black max-w-7xl mb-12 leading-relaxed">
            At Vedant Innovision, we help organizations strengthen their
            corporate brand by aligning culture, communication, and design. Our
            approach focuses on creating a consistent and engaging brand
            experience across all touchpoints—internally and externally.
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
