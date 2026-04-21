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
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto"
        >
          {/* HERO HEADING */}
          <h1
            style={{
              fontSize: "var(--text-hero-page-heading)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
              maxWidth: "var(--hero-heading-max-width)",
              textAlign:
                "var(--text-align-hero)" as React.CSSProperties["textAlign"],
            }}
            className="leading-tight sm:text-3xl md:text-5xl mb-8"
          >
            Infinite Solutions <br className="hidden md:block" />
          </h1>

          <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[540px] overflow-hidden border border-gray-200">
            <video
              src="/Vedant_Video.mp4"
              poster="/fallback.jpg"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ──────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
          color: "var(--color-text-body)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
          textAlign:
            "var(--text-align-section)" as React.CSSProperties["textAlign"],
        }}
        className="lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* ── LEFT COLUMN ──────────────────────────────────────── */}
          <div className="space-y-16">
            {/* ABOUT BLOCK */}
            <div>
              <h2
                style={{
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="mb-6"
              >
                We are Vedant Innovision
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                  maxWidth: "var(--body-copy-max-width)",
                }}
                className="leading-relaxed sm:text-base max-w-full mb-6"
              >
                Vedant Innovision is a digital marketing, IT, and branding
                company driven by proven expertise and measurable success. With
                over 4+ years of experience, 800+ projects delivered, and 40+
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
                style={{
                  background:
                    "linear-gradient(to right, var(--color-cta-from), var(--color-cta-to))",
                  color: "var(--color-cta-text)",
                  fontSize: "var(--text-btn)",
                  fontWeight: "var(--font-weight-btn)",
                }}
                className="inline-flex items-center gap-2 px-5 py-3 hover:opacity-90 transition"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden">
              <Image
                src="/Home-Page-02.jpg"
                alt="Client visuals"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* CASE STUDY BLOCK */}
            <div>
              <h2
                style={{
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="mb-6"
              >
                Latest Case Study
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                  maxWidth: "var(--body-copy-max-width)",
                }}
                className="leading-relaxed sm:text-base max-w-full mb-6"
              >
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
                style={{
                  background:
                    "linear-gradient(to right, var(--color-cta-from), var(--color-cta-to))",
                  color: "var(--color-cta-text)",
                  fontSize: "var(--text-btn)",
                  fontWeight: "var(--font-weight-btn)",
                }}
                className="inline-flex items-center gap-2 px-5 py-2"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden">
              <Image
                src="/Home-Page-04.jpg"
                alt="Case study"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* VISUAL STORIES BLOCK */}
            <div>
              <h2
                style={{
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="mb-6"
              >
                Visual Stories
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                  maxWidth: "var(--body-copy-max-width)",
                }}
                className="leading-relaxed sm:text-base max-w-full mb-6"
              >
                We create videos and animations that communicate clearly and
                serve real business needs. Our services include corporate video
                production, 2D–3D animation, and digital content creation
                designed to improve engagement and brand visibility. From
                induction videos and safety LMS animations to event videos and
                branded content, we focus on delivering clear, engaging, and
                functional communication. We handle everything from concept and
                storyboarding to video shoots, animation, photo shoots,
                stock-based edits, and AI-generated videos — ensuring scalable,
                high-quality content aligned with your business objectives.
              </p>

              <Link
                href={FILMS}
                style={{
                  background:
                    "linear-gradient(to right, var(--color-cta-from), var(--color-cta-to))",
                  color: "var(--color-cta-text)",
                  fontSize: "var(--text-btn)",
                  fontWeight: "var(--font-weight-btn)",
                }}
                className="inline-flex items-center gap-2 px-5 py-2"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────────────── */}
          <div className="space-y-16">
            {/* IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden">
              <Image
                src="/Home-Page-01.jpg"
                alt="Branding"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* BRAND STRATEGY BLOCK */}
            <div>
              <h2
                style={{
                  fontSize: "var(--text-heading-md)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="mb-6"
              >
                Brand Strategy
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                  maxWidth: "var(--body-copy-max-width)",
                }}
                className="leading-relaxed sm:text-base max-w-full"
              >
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
                style={{
                  background:
                    "linear-gradient(to right, var(--color-cta-from), var(--color-cta-to))",
                  color: "var(--color-cta-text)",
                  fontSize: "var(--text-btn)",
                  fontWeight: "var(--font-weight-btn)",
                }}
                className="inline-flex mt-6 px-5 py-2"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden">
              <Image
                src="/Home-page-033.jpg"
                alt="Employer branding"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* WORKPLACE IDENTITY BLOCK */}
            <div>
              <h2
                style={{
                  fontSize: "var(--text-heading-lg)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="mb-6"
              >
                Workplace Identity
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                  maxWidth: "var(--body-copy-max-width)",
                }}
                className="leading-relaxed sm:text-base max-w-full"
              >
                We build strong brand identities that stand out and stay
                consistent across every platform. From logo design and visual
                systems to brand guidelines, we create identities that reflect
                your business and connect with your audience. Our focus is on
                clarity, consistency, and long-term usability.
              </p>

              <Link
                href={EMPLOYERBRANDING}
                style={{
                  background:
                    "linear-gradient(to right, var(--color-cta-from), var(--color-cta-to))",
                  color: "var(--color-cta-text)",
                  fontSize: "var(--text-btn)",
                  fontWeight: "var(--font-weight-btn)",
                }}
                className="inline-flex mt-6 px-5 py-2"
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

      {/* ── FIXED CONTACT BUTTON ─────────────────────────────────── */}
      <div className="fixed right-0 top-2/4 -translate-y-1/2 z-50">
        <Link
          href={CONTACT}
          style={{
            background:
              "linear-gradient(to bottom, var(--color-contact-btn-from), var(--color-contact-btn-to))",
            color: "var(--color-contact-btn-text)",
            fontSize: "var(--text-contact-btn-base)",
            letterSpacing: "var(--tracking-contact-btn)",
          }}
          className="font-semibold md:text-sm px-2 py-3 rounded-l-md shadow-md hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div>
    </main>
  );
}
