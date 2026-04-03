"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/app/const/routes.const";
import Testimonial from "@/app/component/Testimonial";
import BrandSection from "@/app/component/BrandSection";
import BiComprehensive from "@/app/component/BiComprehensive";
import BIDiscoverySection from "@/app/component/BIDiscoverySection";
import BiTrasnformedSection from "@/app/component/BiTrasnformedSection";
import ContactDiv from "@/app/component/ContactDiv";
import FaqSection from "@/app/component/FaqsSection";

export default function BrandIdentitySection() {
  return (
    <main>
      {/* Section #1 */}
      <section
        aria-labelledby="brand-identity-heading"
        className="w-full bg-[var(--brand-black)] text-white border-t border-white/10 py-16 px-4 sm:px-6 lg:px-16 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== LEFT SIDE (IMAGE + SHAPES) ===== */}
          <div className="relative flex justify-center">
            {/* Background Circle */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-[var(--brand-purple)]/10 rounded-full -z-10"></div>

            {/* Main Image */}
            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image
                src="/branding-kit.png" // replace with your image
                alt="Brand identity design mockups including brochure, business card, and notebook"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Decorative Circle */}
            <div className="absolute bottom-0 left-10 w-28 h-28 bg-[var(--brand-purple)]/20 rounded-full -z-10"></div>
          </div>

          {/* ===== RIGHT SIDE CONTENT ===== */}
          <div className="max-w-xl">
            <h1
              id="brand-identity-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--brand-purple)] leading-tight mb-6"
            >
              Professional Brand <br /> Identity Design Services
            </h1>

            <p className="text-black text-base md:text-lg leading-relaxed mb-6">
              We don’t just design logos; we build visual legacies. As a premier
              <strong> brand identity design company</strong> with over{" "}
              <strong>4+ year of excellence</strong> and{" "}
              <strong>800+ projects delivered</strong>, Vedant Innovision
              Brands helps businesses cut through the noise with cohesive,
              strategic, and impactful design. We transform your vision into a
              powerful brand identity that commands attention and fosters
              immediate trust.
            </p>
          </div>
        </div>
      </section>
      {/* Section #2x */}
      <section className="w-full ">
        <div className="bg-gradient-to-r from-purple-900 via-gray-100 py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-16 text-black">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <h2
              id="branding-why-heading"
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold italic mb-6 leading-snug"
            >
              Why Your Business Needs Strategic Branding and Identity Design
              Services
            </h2>

            {/* Content */}
            <div className="space-y-4 text-sm sm:text-base md:text-lg">
              <p className="leading-relaxed">
                In a crowded market, being “good” isn’t enough—you must be
                recognizable. Any agency can create a logo, but effectively
                bringing an idea to life requires a robust strategic foundation.
                Our{" "}
                <strong className="font-semibold">brand design services</strong>{" "}
                bridge the gap between who you are and how the world perceives
                you.
              </p>

              <p className="leading-relaxed">
                At Vedant Innovision Brands, we believe a brand is a living
                ecosystem. We combine consumer psychology with world-class
                aesthetics to create a visual language that speaks to your
                audience before you even say a word. Whether you are a
                disruptive startup or a Fortune 500 enterprise, we ensure your
                identity is your greatest competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BiTrasnformedSection />

      <BiComprehensive />

      <BIDiscoverySection />

      <BrandSection />

      <Testimonial />

      <FaqSection />

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
