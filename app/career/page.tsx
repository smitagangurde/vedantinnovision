"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Testimonial from "../component/Testimonial";
import Link from "next/link";
import { CONTACT } from "../const/routes.const";

type JobType = {
  title: string;
  location: string;
  about: string;
  responsibilities: string[];
  perfectFor: string[];
  note?: string;
  email?: string;
};

export default function CareerPage() {
  const jobDetails: JobType[] = [
    {
      title: "Business Development Executive",
      location: "Pune",
      about:
        "We're looking for someone who can drive business growth by identifying opportunities, building relationships, and converting conversations into long-term partnerships. This role sits at the intersection of strategy, communication, and execution.",
      responsibilities: [
        "Identify and generate new business opportunities across branding, design, and technology services.",
        "Build and manage client relationships from first interaction to closure.",
        "Understand client requirements and align them with our service offerings.",
        "Prepare proposals, presentations, and pitch decks.",
        "Collaborate with internal teams to ensure smooth project onboarding.",
        "Track leads, follow-ups, and conversions consistently.",
      ],
      perfectFor: [
        "1–3 years of experience in sales, marketing, or business development",
        "Strong communication and negotiation skills.",
        "Understanding of digital, branding, or IT services is a plus.",
        "Self-driven, proactive, and target-oriented",
        "Comfortable with client interactions and presentations.",
      ],
      note: "We would prefer individuals who can join immediately.",
      email: "amitkumar@vedantinnovision.com",
    },
    {
      title: "Animation & Video Production  ",
      location: "Pune",
      about:
        "We're looking for a creative professional who can bring ideas to life through motion. From concept to final output, you'll work on animations, video edits, and visual storytelling across multiple formats.",
      responsibilities: [
        "Create 2D/3D animations and high-quality video content.",
        "Edit videos for social media, presentations, and brand campaigns.",
        "Work closely with the design and content teams to execute concepts.",
        "Add motion graphics, transitions, and effects to enhance storytelling.",
        "Manage timelines and deliver projects with consistency.",
      ],
      perfectFor: [
        "1–3 years of experience in animation and video production",
        "Proficiency in tools like After Effects, Premiere Pro, Blender/Cinema 4D (or similar).",
        "Strong sense of timing, motion, and visual storytelling.",
        "Ability to handle multiple projects and meet deadlines",
        "Attention to detail and creative problem-solving mindset.",
      ],
      note: "We would prefer individuals who can join immediately.",
      email: "amitkumar@vedantinnovision.com",
    },
    {
      title: "Senior Graphic Designer",
      location: "Pune",
      about:
        "We're looking for a designer who can think beyond visuals and contribute to building strong, consistent brand identities. You'll be involved in everything from concept development to final execution across digital and print.",
      responsibilities: [
        "Develop branding, visual identities, and design systems.",
        "Create creatives for digital platforms, campaigns, and print materials.",
        "Translate ideas into clear, impactful visual communication.",
        "Maintain consistency across all brand touchpoints.",
        "Collaborate with animation, content, and tech teams.",
        "Guide junior designers and ensure quality output.",
      ],
      perfectFor: [
        "2–4 years of experience in graphic design.",
        "Strong portfolio showcasing branding, digital, and print work.",
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
        "Good understanding of layout, typography, and color.",
        "Ability to handle projects independently with attention to detail.",
      ],
      note: "We would prefer individuals who can join immediately.",
      email: "amitkumar@vedantinnovision.com",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(1);

  const testimonials = [
    {
      text: `"Vedant Innovision did a fantastic job designing our posters and banners. Their designs were not only creative but also aligned perfectly with our brand's vision. Despite the distance, they ensured timely delivery to Dhule without any compromise on quality. Truly impressed with their professionalism!"`,
      name: "Arashri infra Pvt. Ltd.",
      role: "-",
      logo: "/brands/bajaj.png",
    },
    {
      text: `"They delivered a functional and well-structured website for our e commerce business. The design is clean, and the development process was smooth. The team demonstrated strong technical skills and met all the project requirements."`,
      name: "Akash Dighe",
      role: "-",
      logo: "/brands/bcg.png",
    },
    {
      text: `"Vedant Innovision's graphic design work is outstanding. Their designs, whether for digital campaigns or print, always stand out, effectively translating ideas into stunning visuals."`,
      name: "Samarth Chaudhari",
      role: "-",
      logo: "/Amazon_logo.svg.png",
    },
    {
      text: `"I recently worked with Vedatn Innovision these fantastic guys for my restaurant, they did an amazing job. They understood my idea gery well and completed the task in time. Really happy and will definitely recommend in my friends."`,
      name: "Aniket Vispute",
      role: "-",
      logo: "/Amazon_logo.svg.png",
    },
  ];

  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const selectedJob = jobDetails[selectedIndex];
  const t = testimonials[tIndex];

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
          className="mx-auto space-y-6 max-w-3xl"
        >
          <h1
            style={{
              fontSize: "var(--text-hero-page-heading)",
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-brand-primary)",
              maxWidth: "var(--hero-heading-max-width)",
              textAlign:
                "var(--text-align-hero)" as React.CSSProperties["textAlign"],
            }}
            className="leading-tight sm:text-4xl md:text-5xl italic"
          >
            Join the Minds That Build What's Next
          </h1>

          <p
            style={{
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-sm)",
            }}
            className="sm:text-lg md:text-xl"
          >
            We're always looking for people who think, create, and execute
            beyond the obvious.
          </p>

          {/* BANNER */}
          <div className="w-full relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] rounded-md overflow-hidden mt-6 shadow-sm">
            <Image
              src="/banner-awards.png"
              alt="Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── WHY SECTION ──────────────────────────────────────────── */}
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
          className="mx-auto space-y-16"
        >
          {/* WHY BLOCK */}
          <div className="space-y-6">
            <h2
              style={{
                fontSize: "var(--text-heading-xl)",
                fontWeight: "var(--font-weight-heading)",
                color: "var(--color-brand-primary)",
              }}
              className="italic"
            >
              Why Vedant Innovision?
            </h2>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base md:text-lg"
            >
              At Vedant Innovision, you don't just work on projects — you build
              ideas into real-world outcomes. From branding and design to
              technology, production, and execution, every project here is
              hands-on, fast-moving, and meaningful.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base md:text-lg"
            >
              We value people who take ownership, think independently, and bring
              clarity to complexity. You'll have the space to experiment, the
              support to grow, and the responsibility to deliver work that makes
              an impact.
            </p>

            <p
              style={{
                color: "var(--color-text-body)",
                fontSize: "var(--text-body-sm)",
              }}
              className="leading-relaxed sm:text-base md:text-lg"
            >
              Our environment is collaborative, practical, and driven by
              progress — where learning happens through doing, and growth comes
              from pushing boundaries every day.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-xl shadow-sm">
                <Image
                  src="/scr1.jpg"
                  alt="Team working"
                  width={1200}
                  height={800}
                  className="h-[300px] w-full object-cover md:h-[420px]"
                />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-xl shadow-sm">
                <Image
                  src="/scr1.jpg"
                  alt="Team meeting"
                  width={800}
                  height={800}
                  className="h-[300px] w-full object-cover md:h-[420px]"
                />
              </div>
            </div>

            <div className="md:col-span-4 md:ml-10">
              <div className="overflow-hidden rounded-xl shadow-sm">
                <Image
                  src="/scr1.jpg"
                  alt="Phone usage"
                  width={800}
                  height={600}
                  className="h-[260px] w-full object-cover md:h-[320px]"
                />
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="overflow-hidden rounded-xl shadow-sm">
                <Image
                  src="/scr1.jpg"
                  alt="Office"
                  width={1200}
                  height={600}
                  className="h-[260px] w-full object-cover md:h-[320px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ───────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(to right, var(--color-bg-career-footer-from), var(--color-bg-career-footer-via), var(--color-bg-career-footer-to))",
          color: "var(--color-text-body)",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* LEFT */}
            <div className="max-w-xl space-y-5">
              <h2
                style={{
                  fontSize: "var(--text-heading-lg)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="italic"
              >
                We learn. We evolve. We improve.
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="leading-relaxed sm:text-base md:text-lg"
              >
                In the creative world, there's always something new to learn. In
                a fast-moving creative and technology space, staying static
                isn't an option. At Vedant Innovision, we continuously explore
                new tools, ideas, and approaches — across design, animation, and
                technology.
              </p>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="leading-relaxed sm:text-base md:text-lg"
              >
                We encourage curiosity, experimentation, and shared learning.
                Every project is an opportunity to refine our thinking, upgrade
                our skills, and deliver work that's better than the last.
              </p>
            </div>

            {/* RIGHT */}
            <div className="max-w-xl space-y-5">
              <h2
                style={{
                  fontSize: "var(--text-heading-lg)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-brand-primary)",
                }}
                className="italic"
              >
                Built on openness and equal opportunity
              </h2>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="leading-relaxed sm:text-base md:text-lg"
              >
                Great ideas don't come from one background or one way of
                thinking. We value diverse perspectives and create an
                environment where everyone has the space to contribute.
              </p>

              <p
                style={{
                  color: "var(--color-text-body)",
                  fontSize: "var(--text-body-sm)",
                }}
                className="leading-relaxed sm:text-base md:text-lg"
              >
                What matters here is your mindset, your skill, and your ability
                to execute. We focus on creating impactful work — together, as a
                team that respects, supports, and grows with each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS SECTION ───────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-hero-from), var(--color-bg-hero-via), var(--color-bg-hero-to))",
          color: "var(--color-text-body)",
          paddingTop: "3.5rem",
          paddingBottom: "3.5rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="lg:px-16"
        aria-labelledby="open-positions-heading"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto space-y-10"
        >
          {/* Heading */}
          <header>
            <h2
              id="open-positions-heading"
              style={{
                fontSize: "var(--text-heading-xl)",
                fontWeight: "var(--font-weight-heading)",
                color: "var(--color-brand-primary)",
              }}
              className="italic"
            >
              Open Positions
            </h2>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {/* LEFT SIDE — Job Panel */}
            <div className="xl:col-span-2 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="grid lg:grid-cols-[250px_1fr]">
                {/* Job List */}
                <nav className="border-r border-gray-200">
                  {jobDetails.map((job, index) => (
                    <button
                      key={job.title}
                      onClick={() => setSelectedIndex(index)}
                      style={
                        selectedIndex === index
                          ? {
                              backgroundColor:
                                "color-mix(in srgb, var(--color-brand-primary) 10%, white)",
                              color: "var(--color-brand-primary)",
                              fontWeight: "var(--font-weight-heading)",
                            }
                          : {
                              color: "var(--color-text-body)",
                            }
                      }
                      className={`w-full text-left px-5 py-4 text-sm sm:text-base border-b border-gray-200 transition hover:opacity-80`}
                      aria-pressed={selectedIndex === index}
                    >
                      {job.title}
                    </button>
                  ))}
                </nav>

                {/* Job Content */}
                <article
                  style={{ color: "var(--color-text-body)" }}
                  className="p-6 sm:p-8 space-y-5"
                >
                  <p
                    style={{
                      color: "var(--color-brand-primary)",
                      fontSize: "var(--text-body-sm)",
                    }}
                    className="sm:text-base"
                  >
                    📍 {selectedJob.location}
                  </p>

                  <h3
                    style={{
                      fontSize: "var(--text-heading-md)",
                      fontWeight: "var(--font-weight-heading)",
                      color: "var(--color-text-body)",
                    }}
                  >
                    {selectedJob.title}
                  </h3>

                  <section>
                    <h4
                      style={{
                        fontWeight: "var(--font-weight-heading)",
                        color: "var(--color-brand-primary)",
                        fontSize: "var(--text-body-sm)",
                      }}
                      className="mb-2"
                    >
                      About the Role
                    </h4>
                    <p
                      style={{ fontSize: "var(--text-body-sm)" }}
                      className="leading-relaxed sm:text-base"
                    >
                      {selectedJob.about}
                    </p>
                  </section>

                  <section>
                    <h4
                      style={{
                        fontWeight: "var(--font-weight-heading)",
                        color: "var(--color-brand-primary)",
                        fontSize: "var(--text-body-sm)",
                      }}
                      className="mb-2"
                    >
                      Responsibilities
                    </h4>
                    <ul
                      style={{ fontSize: "var(--text-body-sm)" }}
                      className="list-disc pl-5 space-y-2 sm:text-base"
                    >
                      {selectedJob.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4
                      style={{
                        fontWeight: "var(--font-weight-heading)",
                        color: "var(--color-brand-primary)",
                        fontSize: "var(--text-body-sm)",
                      }}
                      className="mb-2"
                    >
                      Ideal Candidate
                    </h4>
                    <ul
                      style={{ fontSize: "var(--text-body-sm)" }}
                      className="list-disc pl-5 space-y-2 sm:text-base"
                    >
                      {selectedJob.perfectFor.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {selectedJob.note && (
                    <p
                      style={{
                        color: "var(--color-brand-primary)",
                        fontWeight: "var(--font-weight-heading)",
                        fontSize: "var(--text-body-sm)",
                      }}
                    >
                      {selectedJob.note}
                    </p>
                  )}

                  {selectedJob.email && (
                    <div
                      style={{ fontSize: "var(--text-body-sm)" }}
                      className="sm:text-base"
                    >
                      <p>Think you fit in?</p>
                      <p>
                        Drop us an email with your resume at{" "}
                        <a
                          href={`mailto:${selectedJob.email}`}
                          style={{ color: "var(--color-brand-primary)" }}
                          className="underline hover:opacity-75 transition"
                        >
                          {selectedJob.email}
                        </a>
                      </p>
                    </div>
                  )}
                </article>
              </div>
            </div>

            {/* RIGHT SIDE — Apply Form */}
            <aside className="border border-gray-200 rounded-xl p-6 sm:p-7 bg-white h-fit shadow-sm">
              <div className="mb-6">
                <h3
                  style={{
                    fontSize: "var(--text-heading-md)",
                    fontWeight: "var(--font-weight-heading)",
                    color: "var(--color-text-body)",
                  }}
                >
                  Apply Now
                </h3>
                <div
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                  className="h-[2px] w-10 mt-2 rounded-full"
                />
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "var(--text-body-sm)",
                  }}
                  className="mt-2"
                >
                  Fill in your details and we'll get back to you.
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  required
                  style={{ fontSize: "var(--text-body-sm)" }}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
                />

                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  style={{ fontSize: "var(--text-body-sm)" }}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number*"
                  required
                  style={{ fontSize: "var(--text-body-sm)" }}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
                />

                <select
                  required
                  style={{ fontSize: "var(--text-body-sm)" }}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
                >
                  <option value="">Select Position</option>
                  {jobDetails.map((job) => (
                    <option key={job.title}>{job.title}</option>
                  ))}
                </select>

                <textarea
                  placeholder="Tell us about yourself..."
                  style={{ fontSize: "var(--text-body-sm)" }}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition h-24 resize-none"
                />

                <div className="pt-3 border-t border-gray-200">
                  <label
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "var(--text-body-sm)",
                    }}
                    className="block mb-2"
                  >
                    Resume*
                  </label>
                  <input
                    type="file"
                    required
                    style={{ fontSize: "var(--text-body-sm)" }}
                    className="w-full text-gray-600 cursor-pointer file:mr-3 file:px-3 file:py-1.5 file:rounded-md file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-purple-100"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-cta-from), var(--color-cta-to))",
                    color: "var(--color-cta-text)",
                    fontSize: "var(--text-btn)",
                    fontWeight: "var(--font-weight-btn)",
                  }}
                  className="w-full mt-2 py-2.5 rounded-lg transition shadow-sm hover:opacity-90"
                >
                  Submit Application →
                </button>
              </form>
            </aside>
          </div>
        </div>

        {/* ── STATS ────────────────────────────────────────────────── */}
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto text-center mt-16 mb-8"
        >
          <p
            style={{
              color: "var(--color-brand-primary)",
              fontSize: "var(--text-body-sm)",
            }}
            className="italic mb-4"
          >
            The numbers say it all!
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h3
                style={{
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-text-body)",
                }}
              >
                4+
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "var(--text-body-sm)",
                }}
              >
                Years of experience
              </p>
            </div>

            <div
              style={{ borderColor: "var(--color-brand-primary)" }}
              className="sm:border-x"
            >
              <h3
                style={{
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-text-body)",
                }}
              >
                800+
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "var(--text-body-sm)",
                }}
              >
                Projects delivered
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "var(--text-heading-xl)",
                  fontWeight: "var(--font-weight-heading)",
                  color: "var(--color-text-body)",
                }}
              >
                40+
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "var(--text-body-sm)",
                }}
              >
                Satisfied clients
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      {/* ── FOOTER CTA SECTION ───────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(to right, var(--color-bg-career-footer-from), var(--color-bg-career-footer-via), var(--color-bg-career-footer-to))",
          color: "var(--color-text-body)",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          paddingLeft: "var(--section-px-sm)",
          paddingRight: "var(--section-px-sm)",
        }}
        className="lg:px-16"
      >
        <div
          style={{ maxWidth: "var(--content-max-width)" }}
          className="mx-auto text-center space-y-1"
        >
          <h2
            style={{
              fontWeight: "var(--font-weight-heading)",
              color: "var(--color-text-body)",
              fontSize: "var(--text-body-base)",
            }}
          >
            Want to join the team?
          </h2>

          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "var(--text-body-sm)",
            }}
          >
            Job/internship enquiries:{" "}
            <a
              href="mailto:amitkumar@vedantinnovision.com"
              style={{ color: "var(--color-text-body)" }}
              className="underline contact-link transition"
            >
              amitkumar@vedantinnovision.com
            </a>{" "}
            <span className="hidden sm:inline">|</span>{" "}
            <span className="block sm:inline mt-1 sm:mt-0">
              +91 8799 909 616
            </span>
          </p>
        </div>
      </section>

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
