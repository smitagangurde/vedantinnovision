"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "../const/routes.const";
import ProcessSection from "../component/ProcessSection";
import ContactDiv from "../component/ContactDiv";

export default function BrandConsulting() {
  return (
    <main>
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-purple-600 max-w-5xl mb-8">
            Build Brands That Perform
            <br className="hidden md:block" />
            Strategic Thinking. Creative Execution. Lasting Impact.
          </h1>

          {/* IMAGE */}
          <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[540px] overflow-hidden border border-gray-200 rounded-xl mb-8">
            <Image
              src="/hero.jpg"
              alt="Brand storytelling team"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          {/* PARAGRAPH */}
          <div className="text-black text-sm md:text-base leading-relaxed space-y-4 text-center md:text-left max-w-5xl">
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
      {/* ===== SECTION 2 ===== */}
      <ProcessSection />
      {/* ===== SECTION 3 ===== */}
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-6 sm:px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-purple-100/20 border border-purple-600">
              <Image
                src="/binoculars.png"
                alt="Vision Illustration"
                fill
                className="object-contain p-6"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 mb-6 leading-snug">
                Brand Strategy: Mission, Vision, Values & Purpose
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed mb-2">
                At Vedant Innovision, we help businesses build a strong brand
                foundation by clearly defining their mission, vision, values,
                and purpose. Our approach ensures that your brand is not only
                well-structured but also consistently communicated across
                design, messaging, and overall brand experience.
              </p>
              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                We focus on creating a foundation that aligns with your business
                goals while connecting effectively with both internal teams and
                your target audience.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-4">
                What We Deliver:
              </h3>

              <ul className="space-y-3 text-black text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-black">
                    Core Values Identification:
                  </strong>{" "}
                  We work closely with your team to define the principles that
                  shape your brand and culture, ensuring consistency across
                  communication and operations.
                </li>
                <li>
                  <strong className="text-black">
                    Brand Purpose & Positioning:
                  </strong>{" "}
                  We help you define your “why” and translate it into a clear
                  brand direction that differentiates you in the market.
                </li>
                <li>
                  <strong className="text-black">
                    Vision & Mission Development:
                  </strong>{" "}
                  We craft clear and impactful vision and mission statements
                  that guide your long-term growth and daily decision-making.
                </li>
                <li>
                  <strong className="text-black">
                    Brand Communication Alignment:
                  </strong>{" "}
                  We ensure your brand foundation is reflected across all
                  touchpoints—design, content, and overall brand presence.
                </li>
              </ul>

              <p className="text-black text-sm sm:text-base leading-relaxed mt-6">
                By aligning strategy with execution, we create a cohesive brand
                identity that is clear, consistent, and built to scale—helping
                your business stand out and grow with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SECTION 4 ===== */}
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-6 sm:px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 mb-6 leading-snug">
                Strategic Brand Positioning & Market Differentiation
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                At Vedant Innovision, we build brand positioning strategies that
                go beyond visibility—focusing on clarity, differentiation, and
                real market impact. We help your brand stand out with a strong
                identity that connects with the right audience and supports
                long-term business growth.
              </p>
              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                Our approach ensures your brand is not just seen, but remembered
                and preferred.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-4">
                Our Approach:
              </h3>

              <ul className="space-y-4 text-black text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-black">
                    Market & Competitor Analysis:
                  </strong>{" "}
                  We analyze your industry, competitors, and audience behavior
                  to identify opportunities and define a strong positioning
                  direction.
                </li>

                <li>
                  <strong className="text-black">
                    Segmentation, Targeting & Positioning (STP):
                  </strong>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>
                      <strong className="text-black">Segmentation:</strong>{" "}
                      Understanding different audience groups
                    </li>
                    <li>
                      <strong className="text-black">Targeting:</strong>{" "}
                      Prioritizing the most promising audiences for your brand.
                    </li>
                    <li>
                      <strong className="text-black">Positioning:</strong>{" "}
                      Defining how your brand stands out
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-black">
                    Brand Perception & Differentiation :
                  </strong>{" "}
                  We map how your brand is perceived in the market and identify
                  key areas to create a distinct and competitive edge.
                </li>

                <li>
                  <strong className="text-black">
                    Positioning Strategy Framework :
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

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mt-8 mb-3">
                Why It Matters:
              </h3>

              <p className="text-black text-sm sm:text-base leading-relaxed">
                A strong brand positioning strategy builds recognition, improves
                customer recall, and drives consistent growth. With the right
                positioning, your brand doesn’t just compete—it leads.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-purple-100/20 border border-purple-600">
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
      {/* ===== SECTION 5 ===== */}
      <section
        aria-labelledby="evp-heading"
        className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-6 sm:px-8 lg:px-16 "
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-purple-100/20 border border-purple-600">
              <Image
                src="/binoculars.png"
                alt="Vision Illustration"
                fill
                className="object-contain p-6"
              />
            </div>

            {/* CONTENT */}
            <div className="max-w-xl">
              <h2
                id="evp-heading"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 mb-6 leading-snug"
              >
                Employee Value Proposition (EVP) Strategy & Development
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                At Vedant Innovision, we create strong Employee Value
                Propositions (EVPs) that help brands attract, engage, and retain
                the right talent. Our approach focuses on aligning your company
                culture, values, and growth opportunities with what today’s
                workforce truly values.
              </p>
              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                We ensure your EVP is not just a statement—but a consistent
                experience across your brand, communication, and workplace.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-4">
                Our EVP Services:
              </h3>

              <ul className="space-y-3 text-black text-sm sm:text-base leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-black">
                    Employee Insights & Research:
                  </strong>{" "}
                  We gather insights through research and analysis to understand
                  employee expectations, motivations, and workplace experience.
                </li>
                <li>
                  <strong className="text-black">Market Benchmarking:</strong>{" "}
                  We evaluate your EVP against industry standards and
                  competitors to identify gaps and opportunities for
                  differentiation.
                </li>
                <li>
                  <strong className="text-black">
                    EVP Strategy & Messaging:
                  </strong>{" "}
                  We craft a clear and compelling EVP that communicates your
                  unique strengths, culture, and employee benefits.
                </li>
                <li>
                  <strong className="text-black">
                    Brand & Culture Alignment:
                  </strong>{" "}
                  We ensure your EVP aligns with your overall brand identity,
                  values, and organizational goals.
                </li>
                <li>
                  <strong className="text-black">
                    Implementation & Communication:
                  </strong>{" "}
                  We help integrate your EVP across recruitment, onboarding,
                  internal communication, and employer branding touchpoints.
                </li>
                <li>
                  <strong className="text-black">
                    Performance Tracking & Optimization:
                  </strong>{" "}
                  A well-defined EVP strengthens your employer brand, improves
                  talent acquisition, and drives long-term employee
                  engagement—helping your organization grow with the right
                  people.
                </li>
              </ul>

              <p className="mt-6 text-sm sm:text-base font-medium text-yellow-500">
                Start Your Brand Transformation Today
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SECTION 6 ===== */}
      <section
        aria-labelledby="culture-heading"
        className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-6 sm:px-8 lg:px-16 "
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* CONTENT */}
            <div className="max-w-xl">
              <h2
                id="culture-heading"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 mb-6 leading-snug"
              >
                Organizational Culture Development & Employer Branding
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                At Vedant Innovision, we help businesses build strong,
                performance-driven workplace cultures that align with their
                brand values and business goals. A well-defined culture enhances
                employee experience, improves collaboration, and drives
                long-term growth.
              </p>
              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                Our approach focuses on creating a culture that is not only
                aligned internally but also reflected across your brand and
                communication.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-4">
                Our Culture-Building Services
              </h3>

              <ul className="space-y-4 text-black text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-black">
                    Culture Assessment & Insights:
                  </strong>{" "}
                  We analyze your existing workplace culture to identify
                  strengths, gaps, and opportunities for improvement.
                </li>

                <li>
                  <strong className="text-black">
                    Culture Strategy & Framework:
                  </strong>{" "}
                  We develop a structured culture framework aligned with your
                  mission, values, and long-term business objectives.
                </li>

                <li>
                  <strong className="text-black">
                    Leadership Alignment & Development:
                  </strong>{" "}
                  We help leadership teams define, communicate, and reinforce
                  the desired culture across the organization.
                </li>

                <li>
                  <strong className="text-black">
                    Employee Engagement Strategy:
                  </strong>{" "}
                  We design initiatives that improve engagement, ownership, and
                  collaboration within teams.
                </li>
              </ul>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mt-8 mb-3">
                Why Culture Matters
              </h3>

              <p className="text-black text-sm sm:text-base leading-relaxed">
                A strong organizational culture improves employee satisfaction,
                strengthens employer branding, and supports business
                performance. It helps attract the right talent and creates an
                environment where teams can grow, collaborate, and deliver
                better results.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-purple-100/20 border border-purple-600">
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
          className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black text-xs md:text-sm font-semibold tracking-wide px-2 py-3 rounded-l-md shadow-md hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div>
    </main>
  );
}
