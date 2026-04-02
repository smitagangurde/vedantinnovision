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
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight text-purple-600 max-w-5xl mb-8">
            Craft a Brand That Resonates: <br className="hidden md:block" />
            Strategic Consulting for Lasting Impact
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
              We are trusted experts in guiding businesses in defining and
              clearly expressing their core principles and identity—values,
              mission, vision, and purpose. Our consulting approach is not only
              strategic but also deeply rooted in ensuring that every aspect of
              your brand’s identity is integrated, aligned, and resonates
              powerfully with both internal teams and external stakeholders.
            </p>

            <p>
              We collaborate closely with leadership teams to clarify and
              position your brand for market distinction. Our expertise extends
              to crafting a compelling Employee Value Proposition (EVP) that not
              only attracts top talent but also drives retention by creating
              meaningful connections between employees and the company’s core
              ethos.
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
                Defining Your Mission, Vision, Values, and Purpose
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                We offer comprehensive consulting services to help organizations
                define and integrate their core values, purpose, vision, and
                mission. Our expert approach ensures that these foundational
                elements resonate authentically with both your internal culture
                and external brand perception, guiding your strategic direction
                and fostering trust among stakeholders.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-4">
                Our Services Include:
              </h3>

              <ul className="space-y-3 text-black text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-black">
                    Identifying Core Values:
                  </strong>{" "}
                  We collaborate with your team to uncover the fundamental
                  beliefs that drive your organization, ensuring they align with
                  your culture and are effectively communicated to your
                  audience.
                </li>
                <li>
                  <strong className="text-black">Defining Your ‘Why’:</strong>{" "}
                  We explore the core reasons your organization exists beyond
                  profit, identifying your commitment to societal or
                  environmental impact and articulating a compelling brand
                  purpose.
                </li>
                <li>
                  <strong className="text-black">Vision Formulation:</strong> We
                  work with leadership to craft a compelling vision statement
                  that captures your organization’s long-term aspirations and
                  strategic direction.
                </li>
                <li>
                  <strong className="text-black">Mission Definition:</strong> We
                  assist in articulating a clear mission statement outlining
                  your core purpose, target audience, and unique value, guiding
                  daily operations and decisions.
                </li>
              </ul>

              <p className="text-black text-sm sm:text-base leading-relaxed mt-6">
                By integrating these elements, we help establish a cohesive and
                authentic brand identity that differentiates you in the
                marketplace and fosters a genuine connection with your audience.
                Partner with us to build a purpose-driven brand that inspires
                and makes a meaningful impact.
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
                Strategic Brand Positioning: Your Path to Market Leadership
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                We understand that a strong brand positioning strategy is the
                cornerstone of lasting business success. It’s not just about
                standing out—it’s about owning a meaningful space in the market
                and in the hearts of your audience. Our approach ensures your
                brand differentiates itself and resonates deeply with your
                target audience, driving loyalty and growth.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-4">
                Our Process:
              </h3>

              <ul className="space-y-4 text-black text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-black">Market Research:</strong> We
                  dive deep into your market landscape, uncovering insights
                  about competitors, audience behaviors, and emerging trends.
                  This data forms the foundation of a strategy tailored to your
                  brand.
                </li>

                <li>
                  <strong className="text-black">
                    STP (Segmentation, Targeting, Positioning):
                  </strong>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>
                      <strong className="text-black">Segmentation:</strong>{" "}
                      Breaking down your market into distinct segments based on
                      demographics, behaviors, and preferences.
                    </li>
                    <li>
                      <strong className="text-black">Targeting:</strong>{" "}
                      Prioritizing the most promising audiences for your brand.
                    </li>
                    <li>
                      <strong className="text-black">Positioning:</strong>{" "}
                      Crafting a value proposition that speaks directly to your
                      target segments.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-black">Perceptual Mapping:</strong>{" "}
                  Using perceptual maps to visualize how your brand is perceived
                  against competitors and identify areas for differentiation.
                </li>

                <li>
                  <strong className="text-black">Positioning Statement:</strong>
                  <p className="mt-2">
                    Aligning your offerings with your mission, vision, and
                    values to create a consistent and authentic brand.
                  </p>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Who your target customers are.</li>
                    <li>Their specific needs.</li>
                    <li>Your product or service category.</li>
                    <li>The key benefits your brand delivers.</li>
                    <li>What sets you apart from the competition.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mt-8 mb-3">
                Why It Matters:
              </h3>

              <p className="text-black text-sm sm:text-base leading-relaxed">
                A strategic brand positioning framework aligns your offerings
                with customer preferences, builds recognition, fosters loyalty,
                and drives sustainable growth. With our expertise, your brand
                won’t just exist—it will thrive. Let us help you position your
                brand to lead, inspire, and grow in today’s competitive
                environment.
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
                Creating a Compelling EVP
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                We specialize in crafting compelling Employee Value Propositions
                (EVPs) that help organizations attract, engage, and retain top
                talent. Our EVP consulting services align your company’s unique
                culture, values, and goals with the needs and aspirations of
                your employees.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-4">
                Our EVP Crafting Services Include:
              </h3>

              <ul className="space-y-3 text-black text-sm sm:text-base leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-black">
                    Comprehensive Employee Research:
                  </strong>{" "}
                  We conduct surveys, interviews, and focus groups to understand
                  employees’ perceptions, motivations, and expectations.
                </li>
                <li>
                  <strong className="text-black">Market Benchmarking:</strong>{" "}
                  We analyze industry trends and benchmark your current EVP
                  against competitors to identify strengths and opportunities
                  for improvement.
                </li>
                <li>
                  <strong className="text-black">EVP Development:</strong> Based
                  on our research, we collaborate with leadership to create a
                  compelling EVP communicating your unique benefits and
                  experiences.
                </li>
                <li>
                  <strong className="text-black">
                    Alignment with Brand Values:
                  </strong>{" "}
                  Ensuring your EVP aligns with your mission, vision, and values
                  for a consistent, authentic employer brand.
                </li>
                <li>
                  <strong className="text-black">
                    Implementation Strategy:
                  </strong>{" "}
                  We provide a strategic plan to integrate the EVP across
                  recruitment, onboarding, internal communications, and employee
                  engagement.
                </li>
                <li>
                  <strong className="text-black">
                    Measurement and Optimization:
                  </strong>{" "}
                  Establishing key metrics to measure EVP effectiveness with
                  ongoing refinement support.
                </li>
              </ul>

              <p className="mt-6 text-sm sm:text-base font-medium text-yellow-500">
                Let’s Build Your Employer Brand Together
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
                Building a Thriving Company Culture
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed mb-6">
                We believe that culture isn’t just a buzzword—it’s the heartbeat
                of your organization. A thriving culture aligns with your
                values, drives engagement, and fosters growth and collaboration.
                Our culture-building solutions help your organization unlock its
                true potential by creating an environment where people and
                business flourish together.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mb-4">
                Our Culture-Building Services
              </h3>

              <ul className="space-y-4 text-black text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-black">
                    Comprehensive Culture Assessment:
                  </strong>{" "}
                  We start by understanding the DNA of your current
                  organizational culture. Through surveys, interviews, and
                  observational techniques, we analyze the beliefs, attitudes,
                  and behaviors that define your workplace.
                </li>

                <li>
                  <strong className="text-black">
                    Strategic Culture Design:
                  </strong>{" "}
                  Partnering closely with leadership, we craft a culture
                  blueprint aligned with your mission, values, and business
                  objectives, mapping an actionable roadmap for transformation.
                </li>

                <li>
                  <strong className="text-black">
                    Leadership Development and Alignment:
                  </strong>{" "}
                  Leaders are the architects of culture. Tailored programs
                  empower them to model, communicate, and reinforce the desired
                  traits, ensuring a cohesive cultural foundation.
                </li>

                <li>
                  <strong className="text-black">
                    Employee Engagement Initiatives:
                  </strong>{" "}
                  Programs engage employees in shaping and embracing the new
                  culture, fostering ownership, inspiration, and commitment to
                  organizational values.
                </li>
              </ul>

              <h3 className="text-base sm:text-lg font-semibold text-yellow-500 mt-8 mb-3">
                Why Culture Matters
              </h3>

              <p className="text-black text-sm sm:text-base leading-relaxed">
                A strong, intentional company culture attracts top talent,
                boosts satisfaction, and drives performance. Whether navigating
                change, scaling, or redefining your vision, we help you build a
                culture that reflects who you are and propels you toward your
                goals. Let’s create a thriving culture that inspires excellence
                at every level.
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
