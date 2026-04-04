"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ABOUT,
  BRANDIDENTITY,
  CONTACT,
  EMPLOYERBRANDING,
  FILMS,
  NEWS,
} from "./const/routes.const";
import Testimonial from "./component/Testimonial";
import BrandSection from "./component/BrandSection";
import ContactDiv from "./component/ContactDiv";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white px-4 sm:px-6 md:px-10 pt-8 md:pt-12 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* HERO TEXT */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-purple-700 max-w-5xl mb-10">
            Infinite Solutions <br className="hidden md:block" />
            their purpose with clarity and impact
          </h1>

          {/* IMAGE */}
          <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[540px] overflow-hidden border border-gray-200">
            <Image
              src="/hero.jpg"
              alt="Brand storytelling team"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 text-justify lg:grid-cols-2 gap-10 md:gap-16">
          {/* LEFT SIDE */}
          <div className="space-y-16">
            {/* SECTION 1 */}
            <div>
              <h2 className="text-3xl font-semibold text-purple-700 mb-4">
                We are Vedant Innovision
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl mb-6">
                Vedant Innovision is a digital marketing, IT, and branding
                company driven by proven expertise and measurable success. With
                over 4+ years of experience, 1000+ projects delivered, and 50+
                satisfied clients, we specialize in building impactful brand
                communication that delivers results. By combining strategic
                storytelling, data-driven marketing, and advanced technology, we
                create meaningful connections with your audience. From content
                creation to seamless brand integration, we ensure consistent,
                high-quality experiences that enhance engagement and accelerate
                business growth.
              </p>

              <Link
                href={ABOUT}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-3 font-semibold hover:opacity-90 transition"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]">
              <Image
                src="/Home-Page-02.jpg"
                alt="Client visuals"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="text-3xl font-semibold text-purple-700 mb-4">
                Latest Case Study
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl mb-4">
                We executed end-to-end branding for Atlas Copco across outdoor,
                indoor, and factory environments, ensuring a consistent and
                high-impact brand presence. From gate branding, pylon signages,
                and external visibility elements to indoor wall branding, flex
                installations, and directional signages, every touchpoint was
                designed for clarity and consistency. Within the factory, we
                implemented industrial signages, safety boards, and branding
                elements aligned with operational requirements - creating a
                seamless brand experience across all spaces.
              </p>

              <Link
                href={NEWS}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-2 font-semibold"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]">
              <Image
                src="/Home-Page-04.jpg"
                alt="Case study"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* SECTION 3 */}
            <div>
              <h2 className="text-3xl font-semibold text-purple-700 mb-4">
                Visual Stories
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl mb-4">
                Vedant Innovision is a digital marketing, IT, and branding
                company that specializes in creating impactful video and film
                experiences. We transform your ideas into compelling visual
                narratives through a seamless blend of creativity, technology,
                and strategic storytelling. From concept development to
                post-production, our team ensures every frame aligns with your
                brand identity and business goals. With a strong focus on
                cinematic quality and brand communication, we deliver engaging
                visual content that captures attention, strengthens your brand
                presence, and leaves a lasting impression.
              </p>

              <Link
                href={FILMS}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-2 font-semibold"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-16">
            {/* IMAGE */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]">
              <Image
                src="/Home-Page-01.jpg"
                alt="Branding"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-4">
                Brand Strategy
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl">
                Vedant Innovision is a digital marketing, IT, and branding
                company focused on building strong and impactful brand
                communication. We combine strategic storytelling, data-driven
                marketing, and technology to create meaningful connections with
                your audience. From content creation to seamless brand
                integration, we deliver consistent experiences that enhance
                engagement and drive growth.
              </p>

              <Link
                href={BRANDIDENTITY}
                className="inline-flex mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-2 font-semibold"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]">
              <Image
                src="/Home-page-033.jpg"
                alt="Employer branding"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                Employer Brand
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl">
                Instead of employer branding-Workplace Identity- We build strong
                brand identities that stand out and stay consistent across every
                platform. From logo design and visual systems to brand
                guidelines, we create identities that reflect your business and
                connect with your audience. Our focus is on clarity,
                consistency, and long - term usability.
              </p>

              <Link
                href={EMPLOYERBRANDING}
                className="inline-flex mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-2 font-semibold"
              >
                LEARN MORE →
              </Link>
            </div>
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
