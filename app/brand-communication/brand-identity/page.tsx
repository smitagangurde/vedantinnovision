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
      {/* ── SECTION #1 (HERO STYLE) ───────────────────────── */}
      <section
        aria-labelledby="brand-identity-heading"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          paddingTop: "var(--hero-pt-base)",
          paddingBottom: "var(--hero-pb)",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* LEFT */}
          <div className="relative flex justify-center">
            <div
              style={{
                background: "var(--color-brand-primary)",
                opacity: 0.1,
              }}
              className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full -z-10"
            />

            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image
                src="/branding-kit.png"
                alt="Brand identity design mockups"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div
              style={{
                background: "var(--color-brand-primary)",
                opacity: 0.2,
              }}
              className="absolute bottom-0 left-10 w-28 h-28 rounded-full -z-10"
            />
          </div>

          {/* RIGHT */}
          <div style={{ maxWidth: "var(--body-copy-max-width)" }}>
            <h1
              id="brand-identity-heading"
              style={{
                fontSize: "var(--text-hero-page-heading)",
                fontWeight: "var(--font-weight-heading)",
                color: "var(--color-brand-primary)",
                textAlign:
                  "var(--text-align-hero)" as React.CSSProperties["textAlign"],
              }}
              className="leading-tight sm:text-3xl md:text-5xl mb-6"
            >
              Brand Strategy & <br /> Identity Design Services
            </h1>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base mb-6"
            >
              Logos don’t build brands—strategy does. At Vedant Innovision we
              combine{" "}
              <strong>design and strategy to create brand identities</strong>{" "}
              that stand out, connect, and perform. With{" "}
              <strong>800+ projects delivered</strong>, we help you turn your
              vision into a powerful brand.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION #2 ───────────────────────── */}
      <section className="w-full">
        <div
          style={{
            background:
              "linear-gradient(to right, var(--color-bg-career-footer-from), var(--color-bg-career-footer-via), var(--color-bg-career-footer-to))",
            paddingTop: "var(--section-py-base)",
            paddingBottom: "var(--section-py-base)",
            paddingLeft: "var(--section-px-sm)",
            paddingRight: "var(--section-px-sm)",
            color: "var(--color-text-body)",
          }}
          className="lg:px-16"
        >
          <div
            style={{ maxWidth: "var(--content-max-width)" }}
            className="mx-auto"
          >
            {/* Heading */}
            <h2
              id="branding-why-heading"
              style={{
                fontSize: "var(--text-heading-xl)",
                fontWeight: "var(--font-weight-heading)",
                color: "var(--color-brand-primary)",
              }}
              className="mb-6 italic leading-snug"
            >
              Brand Strategy & Identity Design Services
            </h2>

            {/* Content */}
            <div className="space-y-4">
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  maxWidth: "var(--body-copy-max-width)",
                  color: "var(--color-text-body)",
                }}
                className="leading-relaxed sm:text-base"
              >
                We create strategic and impactful brand identities that go
                beyond visuals—helping your business stand out with clarity,
                consistency, and strong market presence.
              </p>

              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  maxWidth: "var(--body-copy-max-width)",
                  color: "var(--color-text-body)",
                }}
                className="leading-relaxed sm:text-base"
              >
                We don’t just design logos—we build strong brand identities that
                create lasting impact. As a creative brand identity partner with
                4+ years of experience and 800+ projects delivered, Vedant
                Innovision helps businesses stand out through strategic,
                cohesive, and impactful design.
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

      {/* ── FIXED CONTACT BUTTON ───────────────────────── */}
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
