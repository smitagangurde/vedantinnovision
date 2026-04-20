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
        "We’re looking for someone who can drive business growth by identifying opportunities, building relationships, and converting conversations into long-term partnerships. This role sits at the intersection of strategy, communication, and execution.",
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
        "We’re looking for a creative professional who can bring ideas to life through motion. From concept to final output, you’ll work on animations, video edits, and visual storytelling across multiple formats.",
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
        "We’re looking for a designer who can think beyond visuals and contribute to building strong, consistent brand identities. You’ll be involved in everything from concept development to final execution across digital and print.",
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
      text: `Honestly I don’t look at Velocita as simply being our agency. They’re more like partners who always have our best interests in mind. An excellent team, with fantastic support! Feels like an extension of our own team.`,
      name: "Eshan Sharma",
      role: "Marketing Manager",
      logo: "/logo-bajaj-finserv.png",
    },
    {
      text: `Thank you for all of your contributions in the difficult and condensed design effort. You did very well and hope to have the chance to work with you again.`,
      name: "",
      role: "",
      logo: "/logo-bajaj-finserv.png",
    },
    {
      text: `We've found our association with Velocita extremely fruitful for our communication needs. The passion and speed with which they work resonate well with our brand values.`,
      name: "Yogesh Gandhi",
      role: "Marketing & Communications Specialist",
      logo: "/logo-bajaj-finserv.png",
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
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* HERO */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-700 italic">
              Join the Minds That Build What’s Next
            </h1>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              We’re always looking for people who think, create, and execute
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

          {/* WHY SECTION */}
          <div className="max-w-7xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold italic text-purple-700">
              Why Vedant Innovision?
            </h2>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              At Vedant Innovision, you don’t just work on projects — you build
              ideas into real-world outcomes. From branding and design to
              technology, production, and execution, every project here is
              hands-on, fast-moving, and meaningful.
            </p>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              We value people who take ownership, think independently, and bring
              clarity to complexity. You’ll have the space to experiment, the
              support to grow, and the responsibility to deliver work that makes
              an impact.
            </p>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
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

      {/* VALUES SECTION */}
      <section className="w-full bg-gradient-to-r from-purple-900 via-gray-100 py-16 px-4 sm:px-6 md:px-10 lg:px-16 text-black ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* LEFT */}
            <div className="max-w-xl space-y-5">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-purple-700">
                We learn. We evolve. We improve.
              </h2>

              <p className="text-black/70 text-sm sm:text-base md:text-lg leading-relaxed">
                In the creative world, there’s always something new to learn, In
                a fast-moving creative and technology space, staying static
                isn’t an option. At Vedant Innovision, we continuously explore
                new tools, ideas, and approaches — across design, animation, and
                technology.
              </p>

              <p className="text-black/70 text-sm sm:text-base md:text-lg leading-relaxed">
                We encourage curiosity, experimentation, and shared learning.
                Every project is an opportunity to refine our thinking, upgrade
                our skills, and deliver work that’s better than the last.
              </p>
            </div>

            {/* RIGHT */}
            <div className="max-w-xl space-y-5">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-purple-700">
                Built on openness and equal opportunity
              </h2>

              <p className="text-black/70 text-sm sm:text-base md:text-lg leading-relaxed">
                Great ideas don’t come from one background or one way of
                thinking. We value diverse perspectives and create an
                environment where everyone has the space to contribute.
              </p>

              <p className="text-black/70 text-sm sm:text-base md:text-lg leading-relaxed">
                What matters here is your mindset, your skill, and your ability
                to execute. We focus on creating impactful work — together, as a
                team that respects, supports, and grows with each other.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-14 px-4 sm:px-6 md:px-10 lg:px-16 "
        aria-labelledby="open-positions-heading"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Heading */}
          <header>
            <h2
              id="open-positions-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-semibold italic text-purple-400"
            >
              Open Positions
            </h2>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {/* LEFT SIDE */}
            <div className="xl:col-span-2 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="grid lg:grid-cols-[250px_1fr]">
                {/* Job List */}
                <nav className="border-r border-gray-200">
                  {jobDetails.map((job, index) => (
                    <button
                      key={job.title}
                      onClick={() => setSelectedIndex(index)}
                      className={`w-full text-left px-5 py-4 text-sm sm:text-base border-b border-gray-200 transition
                ${
                  selectedIndex === index
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "text-gray-700 hover:bg-purple-50"
                }`}
                      aria-pressed={selectedIndex === index}
                    >
                      {job.title}
                    </button>
                  ))}
                </nav>

                {/* Job Content */}
                <article className="p-6 sm:p-8 text-gray-700 space-y-5">
                  <p className="text-sm sm:text-base text-purple-500">
                    📍 {selectedJob.location}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-black">
                    {selectedJob.title}
                  </h3>

                  <section>
                    <h4 className="font-semibold text-purple-400 mb-2">
                      About the Role
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      {selectedJob.about}
                    </p>
                  </section>

                  <section>
                    <h4 className="font-semibold text-purple-400 mb-2">
                      Responsibilities
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                      {selectedJob.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="font-semibold text-purple-400 mb-2">
                      Ideal Candidate
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                      {selectedJob.perfectFor.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {selectedJob.note && (
                    <p className="font-medium text-purple-500">
                      {selectedJob.note}
                    </p>
                  )}

                  {/* Email CTA */}
                  {selectedJob.email && (
                    <div>
                      <p className="text-sm sm:text-base">Think you fit in?</p>
                      <p className="text-sm sm:text-base">
                        Drop us an email with your resume at{" "}
                        <a
                          href={`mailto:${selectedJob.email}`}
                          className="text-purple-500 underline hover:text-purple-700"
                        >
                          {selectedJob.email}
                        </a>
                      </p>
                    </div>
                  )}
                </article>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <aside className="border border-gray-200 rounded-xl p-6 sm:p-7 bg-white h-fit shadow-sm">
              {/* Heading */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-black">Apply Now</h3>
                <div className="h-[2px] w-10 bg-purple-400 mt-2 rounded-full"></div>
                <p className="text-sm text-gray-600 mt-2">
                  Fill in your details and we’ll get back to you.
                </p>
              </div>

              <form className="space-y-4">
                {/* Full Name */}
                <input
                  type="text"
                  placeholder="Full Name*"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg 
      bg-white text-sm text-gray-900 placeholder-gray-400 
      focus:outline-none focus:ring-2 focus:ring-purple-400 
      focus:border-purple-400 transition"
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg 
      bg-white text-sm text-gray-900 placeholder-gray-400 
      focus:outline-none focus:ring-2 focus:ring-purple-400 
      focus:border-purple-400 transition"
                />

                {/* Mobile */}
                <input
                  type="tel"
                  placeholder="Mobile Number*"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg 
      bg-white text-sm text-gray-900 placeholder-gray-400 
      focus:outline-none focus:ring-2 focus:ring-purple-400 
      focus:border-purple-400 transition"
                />

                {/* Select Position */}
                <select
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg 
      bg-white text-sm text-gray-600 
      focus:outline-none focus:ring-2 focus:ring-purple-400 
      focus:border-purple-400 transition"
                >
                  <option value="">Select Position</option>
                  {jobDetails.map((job) => (
                    <option key={job.title}>{job.title}</option>
                  ))}
                </select>

                {/* About */}
                <textarea
                  placeholder="Tell us about yourself..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg 
      bg-white text-sm text-gray-900 placeholder-gray-400 
      focus:outline-none focus:ring-2 focus:ring-purple-400 
      focus:border-purple-400 transition h-24 resize-none"
                />

                {/* File Upload */}
                <div className="pt-3 border-t border-gray-200">
                  <label className="text-sm text-gray-600 block mb-2">
                    Resume*
                  </label>
                  <input
                    type="file"
                    required
                    className="w-full text-sm text-gray-600 cursor-pointer
        file:mr-3 file:px-3 file:py-1.5 file:rounded-md
        file:border file:border-gray-300 file:bg-gray-100
        file:text-gray-700 hover:file:bg-purple-100"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-purple-500 hover:bg-purple-600
      text-white py-2.5 font-medium rounded-lg transition shadow-sm"
                >
                  Submit Application →
                </button>
              </form>
            </aside>
          </div>
        </div>

        {/* STATS */}
        <div className="max-w-7xl mx-auto text-center mt-16 mb-8">
          <p className="text-base italic text-purple-400 mb-4">
            The numbers say it all!
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-semibold text-black">4+ </h3>
              <p className="text-gray-600 text-sm">Years of experience</p>
            </div>

            <div className="sm:border-x sm:border-purple-200">
              <h3 className="text-3xl font-semibold text-black">800+</h3>
              <p className="text-gray-600 text-sm">Projects delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-black">40+</h3>
              <p className="text-gray-600 text-sm">Satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="w-full bg-gradient-to-r from-purple-900 via-gray-100 py-5 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-16 text-black">
        <div className="max-w-7xl mx-auto text-center space-y-1">
          {/* Heading */}
          <h2 className="text-sm sm:text-base md:text-lg font-semibold">
            Want to join the team?
          </h2>

          {/* Contact Info */}
          <p className="text-black/70 text-xs sm:text-sm md:text-base">
            Job/internship enquiries:{" "}
            <a
              href="mailto:jobs@vedantinnovisionindia.com"
              className="underline hover:text-yellow-400 transition"
            >
              amitkumar@vedantinnovision.com
            </a>{" "}
            <span className="hidden sm:inline">|</span>{" "}
            <span className="block sm:inline mt-1 sm:mt-0">
              +91 8799 909 616
            </span>
          </p>
        </div>

        {/* Floating Contact Button (unchanged - already matches theme) */}
        <div className="fixed right-0 top-2/4 -translate-y-1/2 z-50">
          <Link
            href={CONTACT}
            className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black text-xs md:text-sm font-semibold tracking-wide px-2 py-3 rounded-l-md shadow-md hover:opacity-90 transition writing-mode-vertical"
          >
            CONTACT
          </Link>
        </div>
      </section>
    </main>
  );
}
