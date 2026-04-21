"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "../const/routes.const";
import ProcessSection from "../component/ProcessSection";
import ContactDiv from "../component/ContactDiv";

export default function BrandConsulting() {
  return (
    <main>
      {/* ===== SECTION 1 — HERO ===== */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          color: "var(--color-text-body)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="w-full lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto"
        >
          {/* HEADING */}
          <h1
            style={{
              fontSize: "var(--text-hero-page-heading)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
              maxWidth: "var(--hero-heading-max-width)",
            }}
            className="sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-8"
          >
            Build Brands That Perform
            <br className="hidden md:block" />
            Strategic Thinking. Creative Execution. Lasting Impact.
          </h1>

          {/* IMAGE */}
          <div
            style={{ borderColor: "var(--color-border-image)" }}
            className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[540px] overflow-hidden border rounded-xl mb-8"
          >
            <Image
              src="/hero.jpg"
              alt="Brand storytelling team"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          {/* PARAGRAPH */}
          <div
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-m)",
              maxWidth: "var(--hero-heading-max-width)",
              textAlign: "center",
            }}
            className="leading-relaxed space-y-4 md:text-left md:text-base"
          >
            <p>
              At Vedant Innovision, we help businesses define and express their
              brand with clarity and purpose. From values and vision to
              positioning and communication, we ensure every element of your
              brand is aligned, consistent, and impactful across all
              touchpoints.
            </p>
            <p>
              Our approach combines strategy with execution—transforming ideas
              into meaningful brand experiences that connect with both internal
              teams and external audiences.
            </p>
            <p>
              We work closely with leadership to shape strong brand positioning
              and create distinct market presence. Our expertise also extends to
              developing compelling Employee Value Propositions (EVP) that not
              only attract the right talent but also strengthen engagement and
              long-term retention.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — PROCESS ===== */}
      <ProcessSection />

      {/* ===== SECTION 3 — BRAND STRATEGY ===== */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
          color: "var(--color-text-body)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="w-full lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT IMAGE */}
            <div
              style={{ borderColor: "var(--color-brand-primary)" }}
              className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-purple-100/20 border"
            >
              <Image
                src="/binoculars.png"
                alt="Vision Illustration"
                fill
                className="object-contain p-6"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div
              style={{ maxWidth: "var(--body-copy-max-width)" }}
              className="max-w-full"
            >
              <h2
                style={{
                  fontSize: "var(--text-heading-md)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug"
              >
                Brand Strategy: Mission, Vision, Values & Purpose
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-m)",
                }}
                className="sm:text-base leading-relaxed mb-2"
              >
                At Vedant Innovision, we help businesses build a strong brand
                foundation by clearly defining their mission, vision, values,
                and purpose. Our approach ensures that your brand is not only
                well-structured but also consistently communicated across
                design, messaging, and overall brand experience.
              </p>
              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-m)",
                }}
                className="sm:text-base leading-relaxed mb-6"
              >
                We focus on creating a foundation that aligns with your business
                goals while connecting effectively with both internal teams and
                your target audience.
              </p>

              <h3
                style={{
                  fontSize: "var(--text-body-base)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "#eab308",
                }}
                className="sm:text-lg mb-4"
              >
                What We Deliver:
              </h3>

              <ul
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="space-y-3 sm:text-base leading-relaxed"
              >
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Core Values Identification:
                  </strong>{" "}
                  We work closely with your team to define the principles that
                  shape your brand and culture, ensuring consistency across
                  communication and operations.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Brand Purpose & Positioning:
                  </strong>{" "}
                  We help you define your "why" and translate it into a clear
                  brand direction that differentiates you in the market.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Vision & Mission Development:
                  </strong>{" "}
                  We craft clear and impactful vision and mission statements
                  that guide your long-term growth and daily decision-making.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Brand Communication Alignment:
                  </strong>{" "}
                  We ensure your brand foundation is reflected across all
                  touchpoints—design, content, and overall brand presence.
                </li>
              </ul>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="sm:text-base leading-relaxed mt-6"
              >
                By aligning strategy with execution, we create a cohesive brand
                identity that is clear, consistent, and built to scale—helping
                your business stand out and grow with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — BRAND POSITIONING ===== */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
          color: "var(--color-text-body)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="w-full lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div
              style={{ maxWidth: "var(--body-copy-max-width)" }}
              className="max-w-full"
            >
              <h2
                style={{
                  fontSize: "var(--text-heading-md)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug"
              >
                Strategic Brand Positioning & Market Differentiation
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="sm:text-base leading-relaxed mb-6"
              >
                At Vedant Innovision, we build brand positioning strategies that
                go beyond visibility—focusing on clarity, differentiation, and
                real market impact. We help your brand stand out with a strong
                identity that connects with the right audience and supports
                long-term business growth.
              </p>
              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="sm:text-base leading-relaxed mb-6"
              >
                Our approach ensures your brand is not just seen, but remembered
                and preferred.
              </p>

              <h3
                style={{
                  fontSize: "var(--text-body-base)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "#eab308",
                }}
                className="sm:text-lg mb-4"
              >
                Our Approach:
              </h3>

              <ul
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="space-y-4 sm:text-base leading-relaxed"
              >
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Market & Competitor Analysis:
                  </strong>{" "}
                  We analyze your industry, competitors, and audience behavior
                  to identify opportunities and define a strong positioning
                  direction.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Segmentation, Targeting & Positioning (STP):
                  </strong>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>
                      <strong style={{ color: "var(--color-text-body)" }}>
                        Segmentation:
                      </strong>{" "}
                      Understanding different audience groups
                    </li>
                    <li>
                      <strong style={{ color: "var(--color-text-body)" }}>
                        Targeting:
                      </strong>{" "}
                      Prioritizing the most promising audiences for your brand.
                    </li>
                    <li>
                      <strong style={{ color: "var(--color-text-body)" }}>
                        Positioning:
                      </strong>{" "}
                      Defining how your brand stands out
                    </li>
                  </ul>
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Brand Perception & Differentiation:
                  </strong>{" "}
                  We map how your brand is perceived in the market and identify
                  key areas to create a distinct and competitive edge.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Positioning Strategy Framework:
                  </strong>
                  <p className="mt-2">We align your brand positioning with:</p>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Your target audience</li>
                    <li>Market needs and expectations</li>
                    <li>Your offerings and services</li>
                    <li>Key brand benefits</li>
                    <li>Your unique differentiators</li>
                  </ul>
                </li>
              </ul>

              <h3
                style={{
                  fontSize: "var(--text-body-base)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "#eab308",
                }}
                className="sm:text-lg mt-8 mb-3"
              >
                Why It Matters:
              </h3>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="sm:text-base leading-relaxed"
              >
                A strong brand positioning strategy builds recognition, improves
                customer recall, and drives consistent growth. With the right
                positioning, your brand doesn't just compete—it leads.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div
              style={{ borderColor: "var(--color-brand-primary)" }}
              className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-purple-100/20 border"
            >
              <Image
                src="/binoculars.png"
                alt="Vision Illustration"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="evp-heading"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
          color: "var(--color-text-body)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="w-full lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* IMAGE */}
            <div
              style={{ borderColor: "var(--color-brand-primary)" }}
              className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-purple-100/20 border"
            >
              <Image
                src="/binoculars.png"
                alt="Vision Illustration"
                fill
                className="object-contain p-6"
              />
            </div>

            {/* CONTENT */}
            <div
              style={{ maxWidth: "var(--body-copy-max-width)" }}
              className="max-w-full"
            >
              <h2
                id="evp-heading"
                style={{
                  fontSize: "var(--text-heading-md)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug"
              >
                Employee Value Proposition (EVP) Strategy & Development
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="sm:text-base leading-relaxed mb-6"
              >
                At Vedant Innovision, we create strong Employee Value
                Propositions (EVPs) that help brands attract, engage, and retain
                the right talent. Our approach focuses on aligning your company
                culture, values, and growth opportunities with what today's
                workforce truly values.
              </p>
              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="sm:text-base leading-relaxed mb-6"
              >
                We ensure your EVP is not just a statement—but a consistent
                experience across your brand, communication, and workplace.
              </p>

              <h3
                style={{
                  fontSize: "var(--text-body-base)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "#eab308",
                }}
                className="sm:text-lg mb-4"
              >
                Our EVP Services:
              </h3>

              <ul
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="space-y-3 sm:text-base leading-relaxed list-disc pl-5"
              >
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Employee Insights & Research:
                  </strong>{" "}
                  We gather insights through research and analysis to understand
                  employee expectations, motivations, and workplace experience.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Market Benchmarking:
                  </strong>{" "}
                  We evaluate your EVP against industry standards and
                  competitors to identify gaps and opportunities for
                  differentiation.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    EVP Strategy & Messaging:
                  </strong>{" "}
                  We craft a clear and compelling EVP that communicates your
                  unique strengths, culture, and employee benefits.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Brand & Culture Alignment:
                  </strong>{" "}
                  We ensure your EVP aligns with your overall brand identity,
                  values, and organizational goals.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Implementation & Communication:
                  </strong>{" "}
                  We help integrate your EVP across recruitment, onboarding,
                  internal communication, and employer branding touchpoints.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Performance Tracking & Optimization:
                  </strong>{" "}
                  A well-defined EVP strengthens your employer brand, improves
                  talent acquisition, and drives long-term employee
                  engagement—helping your organization grow with the right
                  people.
                </li>
              </ul>

              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "#eab308",
                }}
                className="mt-6 sm:text-base"
              >
                Start Your Brand Transformation Today
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="culture-heading"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-section-from), var(--color-bg-section-via), var(--color-bg-section-to))",
          color: "var(--color-text-body)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="w-full lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* CONTENT */}
            <div
              style={{ maxWidth: "var(--body-copy-max-width)" }}
              className="max-w-full"
            >
              <h2
                id="culture-heading"
                style={{
                  fontSize: "var(--text-heading-md)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug"
              >
                Organizational Culture Development & Employer Branding
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="sm:text-base leading-relaxed mb-6"
              >
                At Vedant Innovision, we help businesses build strong,
                performance-driven workplace cultures that align with their
                brand values and business goals. A well-defined culture enhances
                employee experience, improves collaboration, and drives
                long-term growth.
              </p>
              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="sm:text-base leading-relaxed mb-6"
              >
                Our approach focuses on creating a culture that is not only
                aligned internally but also reflected across your brand and
                communication.
              </p>

              <h3
                style={{
                  fontSize: "var(--text-body-base)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "#eab308",
                }}
                className="sm:text-lg mb-4"
              >
                Our Culture-Building Services
              </h3>

              <ul
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="space-y-4 sm:text-base leading-relaxed"
              >
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Culture Assessment & Insights:
                  </strong>{" "}
                  We analyze your existing workplace culture to identify
                  strengths, gaps, and opportunities for improvement.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Culture Strategy & Framework:
                  </strong>{" "}
                  We develop a structured culture framework aligned with your
                  mission, values, and long-term business objectives.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Leadership Alignment & Development:
                  </strong>{" "}
                  We help leadership teams define, communicate, and reinforce
                  the desired culture across the organization.
                </li>
                <li>
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Employee Engagement Strategy:
                  </strong>{" "}
                  We design initiatives that improve engagement, ownership, and
                  collaboration within teams.
                </li>
              </ul>

              <h3
                style={{
                  fontSize: "var(--text-body-base)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "#eab308",
                }}
                className="sm:text-lg mt-8 mb-3"
              >
                Why Culture Matters
              </h3>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="sm:text-base leading-relaxed"
              >
                A strong organizational culture improves employee satisfaction,
                strengthens employer branding, and supports business
                performance. It helps attract the right talent and creates an
                environment where teams can grow, collaborate, and deliver
                better results.
              </p>
            </div>

            {/* IMAGE */}
            <div
              style={{ borderColor: "var(--color-brand-primary)" }}
              className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-purple-100/20 border"
            >
              <Image
                src="/binoculars.png"
                alt="Vision Illustration"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactDiv />

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
