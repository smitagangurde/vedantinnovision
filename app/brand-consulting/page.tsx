"use client";

import Image from "next/image";
import { Lightbulb, Target, Users, Sparkles } from "lucide-react";

const data = [
  {
    icon: <Lightbulb className="w-8 h-8 text-[var(--brand-purple)]" />,
    title: "Defining Your Mission, Vision, Values, and Purpose",
    desc: "We work with you to create a clear and authentic direction that guides decision-making and inspires both employees and customers.",
  },
  {
    icon: <Target className="w-8 h-8 text-[var(--brand-purple)]" />,
    title: "Strategic Brand Positioning",
    desc: "Through deep analysis, we ensure your brand stands out with a unique market presence that reflects its true value and competitive advantage.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[var(--brand-purple)]" />,
    title: "Creating a Compelling EVP",
    desc: "We craft a resonant Employee Value Proposition that speaks directly to your workforce, strengthening recruitment and fostering long-term loyalty.",
  },
  {
    icon: <Users className="w-8 h-8 text-[var(--brand-purple)]" />,
    title: "Building a Thriving Culture",
    desc: "Our team helps you develop a company culture that is not only aligned with your values but also fosters growth, engagement, and collaboration at all levels.",
  },
];

export default function BrandConsulting() {
  return (
    <>
      {/* ===== SECTION 1 ===== */}+{" "}
      <section className="w-full bg-[var(--brand-black)] text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--brand-purple)]">
            Craft a Brand That Resonates:
            <br />
            Strategic Consulting for Lasting Impact
          </h1>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="relative w-full h-[300px] md:h-[420px] rounded-md overflow-hidden">
            <Image
              src="/brand-meeting.jpg"
              alt="Brand Strategy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      {/* ===== SECTION 2 ===== */}
      <section className="w-full bg-[var(--brand-black)]/95 text-white py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-12">
            Our comprehensive, expert-driven process involves:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            {data.map((item, index) => (
              <div
                key={index}
                className="max-w-xs p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition duration-300 border border-white/10 flex flex-col items-center text-center"
              >
                <div className="mb-4">{item.icon}</div>

                <h3 className="text-lg font-semibold text-[var(--brand-purple)] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== SECTION 3 ===== */}
      <section className="w-full bg-[var(--brand-black)] text-white py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center justify-items-center text-center md:text-left">
          {/* LEFT IMAGE */}
          <div className="w-full max-w-md h-[320px] md:h-[420px] relative rounded-xl overflow-hidden bg-[var(--brand-purple)]/10 border border-white/10 mx-auto">
            <Image
              src="/binoculars.png"
              alt="Vision Illustration"
              fill
              className="object-contain p-6"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-4">
              Defining Your Mission, Vision, Values, and Purpose
            </h2>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              We offer comprehensive consulting services to help organizations
              define and integrate their core values, purpose, vision, and
              mission.
            </p>

            <h3 className="text-lg font-semibold text-[var(--brand-gold)] mb-4">
              Our Services Include:
            </h3>

            <ul className="space-y-3 text-sm md:text-base text-gray-300">
              <li>
                <strong className="text-white">Identifying Core Values:</strong>{" "}
                We collaborate with your team to uncover key beliefs.
              </li>
              <li>
                <strong className="text-white">Defining Your ‘Why’:</strong> We
                articulate a compelling brand narrative.
              </li>
              <li>
                <strong className="text-white">Vision Formulation:</strong> We
                craft a clear long-term vision.
              </li>
              <li>
                <strong className="text-white">Mission Definition:</strong> We
                define a concise mission.
              </li>
            </ul>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-6">
              We help establish a cohesive and authentic brand identity that
              differentiates you.
            </p>
          </div>
        </div>
      </section>
      {/* ===== SECTION 4 ===== */}
      <section className="w-full bg-[var(--brand-black)] text-white py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center justify-items-center text-center lg:text-left">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-4">
              Strategic Brand Positioning: Your Path to Market Leadership
            </h2>

            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
              We understand that a strong brand positioning strategy is the
              cornerstone of lasting business success.
            </p>

            <h3 className="text-lg font-semibold text-[var(--brand-gold)] mb-3">
              Our Process:
            </h3>

            <ul className="space-y-4 text-sm md:text-base text-gray-300">
              <li>
                <strong className="text-white">Market Research:</strong> Deep
                insights into competitors and audience behavior.
              </li>

              <li>
                <strong className="text-white">
                  STP (Segmentation, Targeting, Positioning):
                </strong>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>
                    <strong>Segmentation:</strong> Divide market
                  </li>
                  <li>
                    <strong>Targeting:</strong> Focus audience
                  </li>
                  <li>
                    <strong>Positioning:</strong> Unique value
                  </li>
                </ul>
              </li>

              <li>
                <strong className="text-white">Perceptual Mapping:</strong>{" "}
                Analyze brand perception.
              </li>

              <li>
                <strong className="text-white">Positioning Statement:</strong>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Target customers</li>
                  <li>Needs</li>
                  <li>Category</li>
                  <li>Benefits</li>
                  <li>Differentiation</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full max-w-md h-[320px] md:h-[420px] relative rounded-xl overflow-hidden bg-[var(--brand-purple)]/10 border border-white/10 mx-auto">
            <Image
              src="/binoculars.png"
              alt="Vision Illustration"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      </section>
      {/* ===== SECTION 5 ===== */}
      <section
        aria-labelledby="evp-heading"
        className="w-full bg-[var(--brand-black)] text-white py-16 px-6 md:px-12 lg:px-20 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center justify-items-center">
          {/* IMAGE */}
          <div className="w-full max-w-md h-[320px] md:h-[420px] relative rounded-xl overflow-hidden bg-[var(--brand-purple)]/10 border border-white/10 mx-auto">
            <Image
              src="/binoculars.png"
              alt="Vision Illustration"
              fill
              className="object-contain p-6"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-xl mx-auto md:text-left">
            <h2
              id="evp-heading"
              className="text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-4"
            >
              Creating a Compelling EVP
            </h2>

            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
              We specialize in crafting compelling Employee Value Propositions
              (EVPs).
            </p>

            <h3 className="text-lg font-semibold mb-4 text-[var(--brand-gold)]">
              Our EVP Crafting Services Include:
            </h3>

            <ul className="space-y-3 text-sm md:text-base text-gray-300 list-disc pl-5">
              <li>
                <strong className="text-white">Employee Research:</strong>{" "}
                Surveys & insights.
              </li>
              <li>
                <strong className="text-white">Market Benchmarking:</strong>{" "}
                Compare EVP.
              </li>
              <li>
                <strong className="text-white">EVP Development:</strong> Clear
                proposition.
              </li>
              <li>
                <strong className="text-white">Brand Alignment:</strong>{" "}
                Consistency.
              </li>
              <li>
                <strong className="text-white">Implementation:</strong> Across
                touchpoints.
              </li>
              <li>
                <strong className="text-white">Optimization:</strong> Continuous
                improvement.
              </li>
            </ul>

            <p className="mt-6 font-medium text-[var(--brand-purple)]">
              Let’s Build Your Employer Brand Together
            </p>
          </div>
        </div>
      </section>
      {/* ===== SECTION 6 ===== */}
      <section
        aria-labelledby="culture-heading"
        className="w-full bg-[var(--brand-black)] text-white py-16 px-6 md:px-12 lg:px-20 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center justify-items-center">
          {/* CONTENT */}
          <div className="max-w-xl mx-auto md:text-left">
            <h2
              id="culture-heading"
              className="text-2xl md:text-3xl font-semibold text-[var(--brand-purple)] mb-4"
            >
              Building a Thriving Company Culture
            </h2>

            <p className="text-sm md:text-base text-gray-300 mb-6">
              We believe that culture isn’t just a buzzword—it’s the heartbeat
              of your organization. A thriving culture is one that aligns with
              your values, drives engagement, and fosters growth and
              collaboration at every level. Our culture-building solutions are
              designed to help your organization unlock its true potential by
              creating an environment where people and business flourish
              together.
            </p>

            <h3 className="text-lg font-semibold text-[var(--brand-gold)] mb-4">
              Our Culture-Building Services
            </h3>

            <ul className="space-y-4 text-sm md:text-base text-gray-300">
              <li>
                <strong className="text-white">
                  Comprehensive Culture Assessment
                </strong>
                <br />
                We start by understanding the DNA of your current organizational
                culture. Through surveys, interviews, and observational
                techniques, we analyze the beliefs, attitudes, and behaviors
                that define your workplace. This detailed assessment highlights
                your cultural strengths and uncovers opportunities for growth,
                providing the insights needed to transform your organization.
              </li>
              <li>
                <strong className="text-white">Strategic Culture Design</strong>
                <br />
                Partnering closely with your leadership team, we craft a culture
                blueprint that aligns with your mission, values, and business
                objectives. We map out a clear, actionable roadmap to evolve
                your culture from where it is today to where it needs to be,
                ensuring every step supports your strategic goals.
              </li>
              <li>
                <strong className="text-white">
                  Leadership Development and Alignment
                </strong>
                <br />
                Leaders are the architects of culture. We empower your
                leadership team with tailored development programs to enhance
                their ability to model, communicate, and reinforce the desired
                cultural traits. By aligning leadership behaviors with
                organizational values, we create a cohesive and supportive
                foundation for cultural transformation.
              </li>
              <li>
                <strong className="text-white">
                  Employee Engagement Initiatives
                </strong>
                <br />
                True cultural change begins from within. We design programs that
                actively engage employees in shaping and embracing the new
                culture. By fostering a sense of ownership and connection to the
                organization’s values, we create a workforce that’s committed,
                inspired, and ready to drive your business forward.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-[var(--brand-gold)] mt-8 mb-3">
              Why Culture Matters
            </h3>

            <p className="text-sm md:text-base text-gray-300">
              SA strong, intentional company culture attracts top talent, boosts
              employee satisfaction, and drives performance. Whether you’re
              navigating change, scaling your organization, or redefining your
              vision, we’re here to help you build a culture that not only
              reflects who you are but also propels you toward where you want to
              be. Let’s create a thriving culture that inspires excellence at
              every level. Contact us today to start your culture transformation
              journey.
            </p>
          </div>

          <div className="w-full max-w-md h-[320px] md:h-[420px] relative rounded-xl overflow-hidden bg-[var(--brand-purple)]/10 border border-white/10 mx-auto">
            <Image
              src="/binoculars.png"
              alt="Vision Illustration"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      </section>
      {/* ===== SECTION 7 ===== */}
      <section className="w-full border-t border-purple-900">
        <div className="bg-gradient-to-r from-purple-900 to-black py-14 sm:py-12 sm:py-14 md:py-16 lg:py-20 md:py-20 px-4 sm:px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold italic mb-8 leading-snug text-white">
              We&apos;re easy to talk to. Explore how we can work together!
            </h2>

            <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-300">
              <p>
                <a
                  href="mailto:hello@velocitindia.com"
                  className="underline hover:text-yellow-400 transition"
                >
                  hello@velocitindia.com
                </a>
              </p>

              <p className="text-sm opacity-70">Or</p>

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
    </>
  );
}
