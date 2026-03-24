"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "../const/routes.const";
import ProcessSection from "../component/ProcessSection";

export default function BrandConsulting() {
  return (
    <>
      {/* ===== SECTION 1 ===== */}
      {/* HERO TEXT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-8 md:pt-12 pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-[var(--brand-purple)] max-w-5xl">
          Craft a Brand That Resonates: <br className="hidden md:block" />
          Strategic Consulting for Lasting Impact
        </h1>
      </section>
      <section className="w-full px-4 sm:px-6 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
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
        {/* Paragraph */}
        <div className="max-w-7xl mx-auto mt-8 md:mt-10 text-gray-200 text-sm md:text-base leading-relaxed space-y-4 text-center md:text-left">
          <p>
            We are trusted experts in guiding businesses in defining and clearly
            expressing their core principles and identity—values, mission,
            vision, and purpose. Our consulting approach is not only strategic
            but also deeply rooted in ensuring that every aspect of your brand’s
            identity is integrated, aligned, and resonates powerfully with both
            internal teams and external stakeholders.
          </p>

          <p>
            We collaborate closely with leadership teams to clarify and position
            your brand for market distinction. Our expertise extends to crafting
            a compelling Employee Value Proposition (EVP) that not only attracts
            top talent but also drives retention by creating meaningful
            connections between employees and the company’s core ethos.
          </p>
        </div>
      </section>
      {/* ===== SECTION 2 ===== */}
      <ProcessSection />
      {/* ===== SECTION 3 ===== */}
      <section className="w-full bg-[var(--brand-black)] text-white py-16 px-4 sm:px-6 lg:px-16 border-t border-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-[var(--brand-purple)]/10 border border-purple-900">
              <Image
                src="/binoculars.png"
                alt="Vision Illustration"
                fill
                className="object-contain p-6"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-500 mb-6 leading-snug">
                Defining Your Mission, Vision, Values, and Purpose
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                We offer comprehensive consulting services to help organizations
                define and integrate their core values, purpose, vision, and
                mission. Our expert approach ensures that these foundational
                elements resonate authentically with both your internal culture
                and external brand perception, guiding your strategic direction
                and fostering trust among stakeholders
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-[var(--brand-gold)] mb-4">
                Our Services Include:
              </h3>

              <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-white">
                    Identifying Core Values:
                  </strong>{" "}
                  We collaborate with your team to uncover the fundamental
                  beliefs that drive your organization, ensuring they align with
                  your internal culture and are effectively communicated to your
                  audience.
                </li>
                <li>
                  <strong className="text-white">Defining Your ‘Why’:</strong>{" "}
                  We delve into the core reasons your organization exists beyond
                  profit, identifying your commitment to addressing specific
                  societal or environmental challenges, thereby articulating a
                  compelling brand purpose.
                </li>
                <li>
                  <strong className="text-white">Vision Formulation:</strong> We
                  We work with your leadership to craft a compelling vision
                  statement that encapsulates your organization’s long-term
                  aspirations and strategic direction, serving as a beacon for
                  future growth.
                </li>
                <li>
                  <strong className="text-white">Mission Definition:</strong> We
                  We assist in articulating a clear and concise mission
                  statement that outlines your organization’s core purpose,
                  target audience, and the unique value you provide, guiding
                  daily operations and decision-making.
                </li>
              </ul>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-6">
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
      <section className="w-full bg-[var(--brand-black)] text-white py-16 px-4 sm:px-6 lg:px-16 border-t border-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-500 mb-6 leading-snug">
                Strategic Brand Positioning: Your Path to Market Leadership
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                We understand that a strong brand positioning strategy is the
                cornerstone of lasting business success. It’s not just about
                standing out—it’s about owning a unique and meaningful space in
                the market and in the hearts of your audience. Our approach
                ensures your brand not only differentiates itself from
                competitors but also resonates deeply with your target audience,
                driving loyalty and growth.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-[var(--brand-gold)] mb-4">
                Our Process:
              </h3>

              <ul className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-white">Market Research:</strong> Deep
                  We dive deep into your market landscape, uncovering valuable
                  insights about your competitors, audience behaviors, and
                  emerging trends. This data forms the foundation of a strategy
                  tailored to where your brand currently stands and where it can
                  shine.
                </li>

                <li>
                  <strong className="text-white">
                    STP (Segmentation, Targeting, Positioning):
                  </strong>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>
                      <strong className="text-white">Segmentation:</strong> We
                      break down your market into distinct segments based on
                      demographics, behaviors, and preferences, ensuring no
                      opportunity is overlooked.
                    </li>
                    <li>
                      <strong className="text-white">Targeting:</strong> Focus
                      By assessing the potential of each segment, we identify
                      and prioritize the most promising audiences for your
                      brand.
                    </li>
                    <li>
                      <strong className="text-white">Positioning:</strong> We
                      craft a value proposition that speaks directly to your
                      target segments, showcasing why your brand is the perfect
                      fit for their needs.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-white">Perceptual Mapping:</strong>{" "}
                  Using perceptual maps, we provide a clear visualization of how
                  your brand is perceived against competitors. This process
                  highlights market gaps, giving you a competitive edge by
                  identifying areas for differentiation.
                </li>

                <li>
                  <strong className="text-white">Positioning Statement:</strong>
                  <li>
                    We ensure that your EVP is aligned with your organization’s
                    mission, vision, and values, creating a consistent and
                    authentic employer brand.
                  </li>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Who your target customers are.</li>
                    <li>Their specific needs.</li>
                    <li>Your product or service category.</li>
                    <li>The key benefits your brand delivers.</li>
                    <li>What sets you apart from the competition.</li>
                  </ul>
                </li>
              </ul>
              <h3 className="text-base sm:text-lg font-semibold text-[var(--brand-gold)] mt-8 mb-3">
                Why It Matters:
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A strategic brand positioning framework aligns your offerings
                with customer preferences, builds recognition, fosters loyalty,
                and ultimately drives sustainable business growth. With our
                expertise, your brand won’t just exist in the marketplace - it
                will thrive. Let us help you position your brand to lead,
                inspire, and grow in today’s competitive environment. Contact us
                now to start building your brand’s unique story.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-[var(--brand-purple)]/10 border border-purple-900">
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
        className="w-full bg-[var(--brand-black)] text-white py-16 px-4 sm:px-6 lg:px-16 border-t border-purple-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-[var(--brand-purple)]/10 border border-purple-900">
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
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-500 mb-6 leading-snug"
              >
                Creating a Compelling EVP
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                We specialize in crafting compelling Employee Value Propositions
                (EVPs) as a ghostwriter that help organizations attract, engage,
                and retain top talent. Our EVP consulting services are designed
                to align your company’s unique culture, values, and goals with
                the needs and aspirations of your employees.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-[var(--brand-gold)] mb-4">
                Our EVP Crafting Services Include:
              </h3>

              <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-white">
                    Comprehensive Employee Research:
                  </strong>{" "}
                  We conduct in-depth research to understand your employees’
                  perceptions, motivations, and expectations. This involves
                  surveys, interviews, and focus groups to gather valuable
                  insights.
                </li>
                <li>
                  <strong className="text-white">Market Benchmarking:</strong>{" "}
                  We analyze industry trends and benchmark your current EVP
                  against competitors to identify areas of strength and
                  opportunities for improvement.
                </li>
                <li>
                  <strong className="text-white">EVP Development:</strong> Clear
                  Based on our research, we collaborate with your leadership
                  team to develop a clear and compelling EVP that communicates
                  the unique benefits and experiences your organization offers.
                </li>
                <li>
                  <strong className="text-white">
                    Alignment with Brand Values:
                  </strong>{" "}
                  We ensure that your EVP is aligned with your organization’s
                  mission, vision, and values, creating a consistent and
                  authentic employer brand.
                </li>
                <li>
                  <strong className="text-white">
                    Implementation Strategy:
                  </strong>{" "}
                  We provide a strategic plan to integrate the EVP across all
                  touchpoints, including recruitment, onboarding, internal
                  communications, and employee engagement initiatives.
                </li>
                <li>
                  <strong className="text-white">
                    Measurement and Optimization:
                  </strong>{" "}
                  We help you establish key metrics to measure the effectiveness
                  of the EVP and offer ongoing support to refine and enhance it
                  over time.
                </li>
              </ul>

              <p className="mt-6 text-sm sm:text-base font-medium text-[var(--brand-gold)]">
                Let’s Build Your Employer Brand Together
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SECTION 6 ===== */}
      <section
        aria-labelledby="culture-heading"
        className="w-full bg-[var(--brand-black)] text-white py-16 px-4 sm:px-6 lg:px-16 border-t border-purple-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* CONTENT */}
            <div className="max-w-xl">
              <h2
                id="culture-heading"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-500 mb-6 leading-snug"
              >
                Building a Thriving Company Culture
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                We believe that culture isn’t just a buzzword—it’s the heartbeat
                of your organization. A thriving culture is one that aligns with
                your values, drives engagement, and fosters growth and
                collaboration at every level. Our culture-building solutions are
                designed to help your organization unlock its true potential by
                creating an environment where people and business flourish
                together.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-[var(--brand-gold)] mb-4">
                Our Culture-Building Services
              </h3>

              <ul className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <li>
                  <strong className="text-white">
                    Comprehensive Culture Assessment:
                  </strong>{" "}
                  We start by understanding the DNA of your current
                  organizational culture. Through surveys, interviews, and
                  observational techniques, we analyze the beliefs, attitudes,
                  and behaviors that define your workplace. This detailed
                  assessment highlights your cultural strengths and uncovers
                  opportunities for growth, providing the insights needed to
                  transform your organization.
                </li>

                <li>
                  <strong className="text-white">
                    Strategic Culture Design:
                  </strong>{" "}
                  Partnering closely with your leadership team, we craft a
                  culture blueprint that aligns with your mission, values, and
                  business objectives. We map out a clear, actionable roadmap to
                  evolve your culture from where it is today to where it needs
                  to be, ensuring every step supports your strategic goals.
                </li>

                <li>
                  <strong className="text-white">
                    Leadership Development and Alignment:
                  </strong>{" "}
                  Leaders are the architects of culture. We empower your
                  leadership team with tailored development programs to enhance
                  their ability to model, communicate, and reinforce the desired
                  cultural traits. By aligning leadership behaviors with
                  organizational values, we create a cohesive and supportive
                  foundation for cultural transformation.
                </li>

                <li>
                  <strong className="text-white">
                    Employee Engagement Initiatives:
                  </strong>{" "}
                  True cultural change begins from within. We design programs
                  that actively engage employees in shaping and embracing the
                  new culture. By fostering a sense of ownership and connection
                  to the organization’s values, we create a workforce that’s
                  committed, inspired, and ready to drive your business forward.
                </li>
              </ul>

              <h3 className="text-base sm:text-lg font-semibold text-[var(--brand-gold)] mt-8 mb-3">
                Why Culture Matters
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A strong, intentional company culture attracts top talent,
                boosts employee satisfaction, and drives performance. Whether
                you’re navigating change, scaling your organization, or
                redefining your vision, we’re here to help you build a culture
                that not only reflects who you are but also propels you toward
                where you want to be. Let’s create a thriving culture that
                inspires excellence at every level. Contact us today to start
                your culture transformation journey.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-[var(--brand-purple)]/10 border border-purple-900">
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
      {/* ===== SECTION 7 ===== */}
      <section className="w-full border-t border-purple-900">
        <div className="bg-gradient-to-r from-purple-900 to-black py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm text-white/80 font-bold mb-3">Contact Us</p>

            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold italic mb-6 leading-snug text-white">
              We&apos;re easy to talk to. Explore how we can work together!
            </h2>

            <div className="space-y-3 text-sm sm:text-base md:text-lg text-gray-300">
              <p>
                <a
                  href="mailto:hello@velocitindia.com"
                  className="underline hover:text-yellow-400 transition"
                >
                  hello@velocitindia.com
                </a>
              </p>

              <p className="text-xs opacity-70">Or</p>

              <p>
                <a
                  href="tel:+918956437437"
                  className="hover:text-yellow-400 transition"
                >
                  +91 8956 437 437
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed right-0 top-2/4 -translate-y-1/2 z-50">
        <Link
          href={CONTACT}
          className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black text-xs md:text-sm font-semibold tracking-wide px-2 py-3 rounded-l-md shadow-md hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div>
    </>
  );
}
