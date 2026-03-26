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
      title: "Client Engagement",
      location: "Pune",
      about:
        "For over 17 years, we have helped organizations define who they truly are and bring that identity to life from the inside out. We are a leading employer branding and communications agency, partnering with ambitious companies to shape authentic employer brands, align leadership narratives, and build engaged, high-performing cultures. From employer value propositions to change and leadership communications, we turn strategy into stories that people understand, believe, and act on. When people connect to a shared purpose, performance follows. We are strategy-led. Story-obsessed. Impact-focused. Join us to help build cultures that shape how people feel, how they show up, and how organizations are perceived by the people who power them.",
      responsibilities: [
        "Build and maintain strong client relationships across ongoing branding and communication projects.",
        "Understand client goals, gather briefs, and translate requirements into actionable creative and strategic plans.",
        "Coordinate with internal teams to ensure timely and high-quality project delivery.",
        "Manage project timelines, feedback loops, and approvals with clarity and professionalism.",
        "Identify opportunities to grow existing accounts and add more value to client engagements.",
        "Ensure all deliverables align with the brand, business objectives, and quality standards.",
      ],
      perfectFor: [
        "2–5+ years of experience in client servicing, account management, or brand communications.",
        "Excellent written and verbal communication skills.",
        "Strong coordination and multitasking ability across multiple projects.",
        "Confidence in handling client conversations, feedback, and presentations.",
        "Agency experience is preferred.",
        "Comfortable working independently and closely with cross-functional teams.",
      ],
      note: "We would prefer individuals who can join immediately.",
      email: "Jobs@VelocitaIndia.com",
    },
    {
      title: "Graphic Design",
      location: "Pune",
      about:
        "For over 17 years, we have helped organizations define who they truly are and bring that identity to life from the inside out. We are a leading employer branding and communications agency, partnering with ambitious companies to shape authentic employer brands, align leadership narratives, and build engaged, high-performing cultures. From employer value propositions to change and leadership communications, we turn strategy into stories that people understand, believe, and act on. When people connect to a shared purpose, performance follows. We are strategy-led. Story-obsessed. Impact-focused. Join us to help build cultures that shape how people feel, how they show up, and how organizations are perceived by the people who power them.",
      responsibilities: [
        "Team up with client engagement leads, copywriters, and designers to spark bold ideas for campaigns and employer branding initiatives. You will not just execute visuals, you will help shape the thinking behind them.",
        "Bring brands to life across print and digital. From high-impact marketing campaigns to internal communications, leadership decks, and employee engagement content, you will design work that people actually want to look at and engage with.",
        "Turn complex, layered ideas into visual stories that feel simple, sharp, and powerful.",
        "Dive into market, competitor, and audience research to strengthen your creative decisions. The more you understand the landscape, the stronger your design instinct becomes.",
        "Own your timelines like a pro. Deliver great work on schedule without compromising on craft or concept.",
        "Spot creative roadblocks before they become problems. Suggest smart, practical solutions that keep projects moving and standards high.",
      ],
      perfectFor: [
        "3–5+ years of experience in graphic design, preferably within an agency environment.",
        "Strong portfolio showcasing a range of work across print and digital, including campaigns, editorial design, brand systems, and communication-led projects.",
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign, etc.).",
        "Exceptional eye for detail, typography, layout, and visual hierarchy, with the ability to maintain brand consistency across formats.",
        "Strong conceptual thinking skills with the ability to turn ideas into sharp, purposeful design.",
        "Comfortable working independently while collaborating closely within cross-functional teams.",
        "Receptive to feedback, adaptable to evolving briefs, and capable of working under tight deadlines.",
      ],
      note: "We would prefer individuals who can join immediately.",
      email: "Jobs@VelocitaIndia.com",
    },
    {
      title: "Video Editing & Motion Graphics",
      location: "Pune",
      about:
        "We create content that informs, inspires, and engages. As part of our creative team, you will work on motion graphics, corporate films, social media videos, employer branding campaigns, and internal communication assets for leading brands.",
      responsibilities: [
        "Edit videos for digital campaigns, social media, internal communication, and brand storytelling.",
        "Create motion graphics that elevate visual narratives and communicate ideas clearly.",
        "Work with designers, copywriters, and client teams to develop compelling video outputs.",
        "Manage raw footage, assets, transitions, audio, and final export quality.",
        "Ensure all video content aligns with brand tone and communication objectives.",
        "Handle multiple projects while meeting quality and delivery timelines.",
      ],
      perfectFor: [
        "2–5+ years of experience in video editing and motion graphics.",
        "Good command of Premiere Pro, After Effects, and related tools.",
        "Strong storytelling sense, pacing, and visual composition.",
        "Experience in agency or brand communication work is preferred.",
        "Ability to handle feedback positively and improve outputs quickly.",
      ],
      note: "We would prefer individuals who can join immediately.",
      email: "Jobs@VelocitaIndia.com",
    },
    {
      title: "Copywriting",
      location: "Pune",
      about:
        "Words shape how brands are understood and remembered. We are looking for a copywriter who can turn strategy into compelling narratives across employer branding, internal communication, leadership messaging, campaigns, and digital content.",
      responsibilities: [
        "Write clear, engaging, and brand-aligned copy across digital and print formats.",
        "Translate briefs into concepts, headlines, campaign lines, scripts, and communication content.",
        "Work closely with strategy, design, and client servicing teams.",
        "Adapt tone and messaging for different audiences and communication goals.",
        "Contribute to concept development and creative brainstorming.",
        "Review and refine content for clarity, grammar, and impact.",
      ],
      perfectFor: [
        "2–5+ years of experience in copywriting, preferably in an agency setup.",
        "Excellent command of English and strong storytelling ability.",
        "Experience writing for campaigns, internal communication, branding, or digital content.",
        "Ability to think conceptually and write with purpose.",
        "Comfortable working across multiple formats and fast timelines.",
      ],
      note: "We would prefer individuals who can join immediately.",
      email: "Jobs@VelocitaIndia.com",
    },
    {
      title: "Business Development",
      location: "Pune",
      about:
        "We partner with ambitious organizations to shape authentic brands and build engaged cultures. We are looking for a business development professional who can identify opportunities, build relationships, and contribute to growth.",
      responsibilities: [
        "Identify potential clients and new business opportunities.",
        "Build and nurture relationships with prospects and decision-makers.",
        "Support pitch development, proposals, and presentations.",
        "Coordinate with internal teams to align solutions with client needs.",
        "Track leads, follow-ups, and conversion progress.",
        "Represent the company professionally in meetings and discussions.",
      ],
      perfectFor: [
        "2–5+ years of experience in business development, sales, or client acquisition.",
        "Strong communication and relationship-building skills.",
        "Experience in agency, branding, communication, or consulting environments is a plus.",
        "Confident in presentations and negotiation conversations.",
        "Self-driven, proactive, and target-oriented.",
      ],
      note: "We would prefer individuals who can join immediately.",
      email: "Jobs@VelocitaIndia.com",
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
    <main className="bg-[#f5f5f5] text-[#2f3f63]">
      {/* HERO + WHY + IMAGE GRID */}
      <section className="w-full bg-black text-gray-300 py-16 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-purple-900">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* HERO */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-400 italic">
              Calling all creative minds!
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">
              We’re always open to new ideas, new people & new experiences.
            </p>

            {/* BANNER */}
            <div className="w-full relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] rounded-md overflow-hidden mt-6">
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
            <h2 className="text-2xl md:text-3xl font-semibold italic text-purple-400">
              Why Vedant Innovision?
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Having a place where you are valued, nurtured and given the
              freedom to stretch your creative boundaries is important. Velocita
              strives to be that place for you!
            </p>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              We welcome people who have a flair for creativity, a passion for
              excellence and who can take projects to a whole new level. At
              Velocita, we create a warm, nurturing environment where everyone
              can grow their careers on their own terms.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-xl">
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
              <div className="overflow-hidden rounded-xl">
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
              <div className="overflow-hidden rounded-xl">
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
              <div className="overflow-hidden rounded-xl">
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
      <section className="w-full border-t border-purple-900">
        <div className="bg-gradient-to-r from-purple-900 to-black py-16 px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {/* LEFT */}
              <div className="max-w-xl space-y-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-purple-300">
                  We’re learning every day
                </h2>

                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  In the creative world, there’s always something new to learn,
                  explore and experience
                  <span className="italic"> (Thanks, Social Media!)</span>. Here
                  at Velocita, we believe in never growing up. We plan to remain
                  forever hungry for knowledge, full of wide-eyed curiosity
                  <span className="italic"> (giggles)</span> and imagination
                  that can never be put to rest. So we always encourage everyone
                  to lend each other a hand, but more importantly, give each
                  other the nudge to bring newer and crazier ideas into the
                  meeting rooms.
                </p>
              </div>

              {/* RIGHT */}
              <div className="max-w-xl space-y-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-purple-300">
                  We’re all for complete inclusivity
                </h2>

                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  Ideas can come from anywhere if you keep your hearts and minds
                  open to them. This is why we keep our doors ajar for people
                  from all walks of life. If your skills and abilities fit the
                  job, we make sure the rest just falls into place. At the end
                  of the day, creating impactful work for our clients is where
                  our focus lies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-14 border-t border-purple-900 bg-black"
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
            <div className="xl:col-span-2 border border-purple-900 rounded-lg overflow-hidden">
              <div className="grid lg:grid-cols-[250px_1fr]">
                {/* Job List */}
                <nav className="border-r border-purple-900">
                  {jobDetails.map((job, index) => (
                    <button
                      key={job.title}
                      onClick={() => setSelectedIndex(index)}
                      className={`w-full text-left px-5 py-4 text-sm sm:text-base border-b border-purple-900 transition
                ${
                  selectedIndex === index
                    ? "bg-purple-900 text-white font-semibold"
                    : "text-gray-300 hover:bg-purple-900/30"
                }`}
                      aria-pressed={selectedIndex === index}
                    >
                      {job.title}
                    </button>
                  ))}
                </nav>

                {/* Job Content */}
                <article className="p-6 sm:p-8 text-gray-300 space-y-5">
                  <p className="text-sm sm:text-base text-purple-400">
                    📍 {selectedJob.location}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {selectedJob.title}
                  </h3>

                  <section>
                    <h4 className="font-semibold text-purple-400 mb-2">
                      About Us
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
                    <p className="font-medium text-purple-300">
                      {selectedJob.note}
                    </p>
                  )}

                  {/* Email CTA */}
                  {selectedJob.email && (
                    <div>
                      <p className="text-sm sm:text-base">Think you fit in?</p>
                      <p className="text-sm sm:text-base">
                        Drop us an email with your resume and few links to your
                        recent work at{" "}
                        <a
                          href={`mailto:${selectedJob.email}`}
                          className="text-purple-400 underline hover:text-purple-300"
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
            <aside className="border border-purple-900/50 rounded-xl p-6 sm:p-7 bg-[#0a0a0a] h-fit shadow-[0_0_20px_rgba(168,85,247,0.08)]">
              {/* Heading */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-white">Apply Now</h3>
                <div className="h-[2px] w-10 bg-purple-500 mt-2 rounded-full"></div>
                <p className="text-sm text-gray-400 mt-2">
                  Fill in your details and we’ll get back to you.
                </p>
              </div>

              <form className="space-y-4">
                {/* Inputs */}
                <input
                  type="text"
                  placeholder="Full Name*"
                  required
                  className="input-modern"
                />

                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  className="input-modern"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number*"
                  required
                  className="input-modern"
                />

                <select required className="input-modern text-gray-400">
                  <option value="">Select Position</option>
                  {jobDetails.map((job) => (
                    <option key={job.title}>{job.title}</option>
                  ))}
                </select>

                <textarea
                  placeholder="Tell us about yourself..."
                  className="input-modern h-24 resize-none"
                />

                {/* File Upload */}
                <div className="pt-3 border-t border-purple-900/40">
                  <label className="text-sm text-gray-400 block mb-2">
                    Resume*
                  </label>
                  <input
                    type="file"
                    required
                    className="text-sm text-gray-400 file:mr-3 file:px-3 file:py-1.5
        file:border file:border-purple-800 file:bg-[#111]
        file:text-gray-300 hover:file:bg-purple-900/30 cursor-pointer rounded-md"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-purple-600 hover:bg-purple-700
      text-white py-2.5 font-medium rounded-md transition shadow-md"
                >
                  Submit Application →
                </button>
              </form>
            </aside>
          </div>
        </div>
        <section className="w-full bg-black text-gray-300 pt-12 pb-6 px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            {/* Subtitle */}
            <p className="text-base italic text-purple-400 mb-4">
              The numbers say it all!
            </p>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-semibold text-white">17+</h3>
                <p className="text-gray-400 text-sm">Years of experience</p>
              </div>

              <div className="sm:border-x sm:border-purple-900">
                <h3 className="text-3xl font-semibold text-white">10,000+</h3>
                <p className="text-gray-400 text-sm">Projects delivered</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">5,000+</h3>
                <p className="text-gray-400 text-sm">Satisfied clients</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Testimonial />

      <section className="w-full border-t border-purple-900">
        <div className="bg-gradient-to-r from-purple-900 to-black py-5 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto text-center space-y-1">
            {/* Heading */}
            <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold">
              Want to join the team?
            </h2>

            {/* Contact Info */}
            <p className="text-white/90 text-xs sm:text-sm md:text-base">
              Job/internship enquiries:{" "}
              <a
                href="mailto:Jobs@VelocittaIndia.com"
                className="underline hover:text-white"
              >
                Jobs@VelocittaIndia.com
              </a>{" "}
              <span className="hidden sm:inline">|</span>{" "}
              <span className="block sm:inline mt-1 sm:mt-0">
                +91 8799 909 616
              </span>
            </p>
          </div>
        </div>
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
