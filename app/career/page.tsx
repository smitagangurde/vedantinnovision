"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-500 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Calling all creative minds!
          </h1>

          <p className="max-w-2xl text-lg">
            We’re always open to new ideas, new people & new experiences.
          </p>

          <div className="mt-10">
            <Image
              src="/firstimage.jpg"
              alt="Creative team"
              width={1200}
              height={600}
              className="w-full rounded-xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold italic text-[#1f4aa0]">
            Why Vedant Innovision?
          </h2>

          <p className="mb-4 text-gray-700">
            Having a place where you are valued, nurtured and given the freedom
            to stretch your creative boundaries is important. Velocita strives
            to be that place for you!
          </p>

          <p className="text-gray-700">
            We welcome people who have a flair for creativity, a passion for
            excellence and who can take projects to a whole new level of
            awesome. At Velocita, we create a warm, nurturing environment where
            everyone, from freshers to experienced employees, can grow their
            careers on their own terms.
          </p>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="bg-[#f3f3f3] py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/scr1.jpg"
                  alt="Team working together"
                  width={1200}
                  height={800}
                  className="h-[300px] w-full object-cover md:h-[420px]"
                />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-2xl">
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
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/scr1.jpg"
                  alt="Woman using phone"
                  width={800}
                  height={600}
                  className="h-[260px] w-full object-cover md:h-[320px]"
                />
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/scr1.jpg"
                  alt="Office collaboration"
                  width={1200}
                  height={600}
                  className="h-[260px] w-full object-cover md:h-[320px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold italic text-blue-800">
              We’re learning every day
            </h2>

            <p className="text-gray-700">
              In the creative world, there’s always something new to learn,
              explore and experience. Here at Velocita, we believe in never
              growing up.
            </p>

            <p className="mt-4 text-gray-700">
              So we always encourage everyone to lend each other a hand, but
              more importantly, give each other the nudge to bring newer and
              crazier ideas into the meeting rooms.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold italic text-blue-800">
              We’re all for complete inclusivity
            </h2>

            <p className="text-gray-700">
              Ideas can come from anywhere if you keep your hearts and minds
              open to them.
            </p>

            <p className="mt-4 text-gray-700">
              If your skills and abilities fit the job, we make sure the rest
              just falls into place.
            </p>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS + APPLY NOW */}
      <section className="px-3 py-12 md:px-6">
        <div className="mx-auto max-w-[1700px]">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold italic text-[#1f4aa0] md:text-4xl">
              Open positions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.95fr_0.95fr]">
            {/* LEFT SIDE */}
            <div className="rounded-sm bg-[#f3f3f3]">
              <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
                {/* Job List */}
                <div className="border border-[#dfdfdf] border-r-0 bg-[#f3f3f3]">
                  {jobDetails.map((job, index) => (
                    <button
                      key={job.title}
                      onClick={() => setSelectedIndex(index)}
                      className={`flex w-full items-center border-b border-[#dfdfdf] px-5 py-4 text-left text-[17px] transition ${
                        selectedIndex === index
                          ? "bg-white font-medium text-[#2b5db2]"
                          : "bg-[#f3f3f3] text-[#4a5c82] hover:bg-white"
                      }`}
                    >
                      {job.title}
                    </button>
                  ))}
                </div>

                {/* Job Content */}
                <div className="border border-[#dfdfdf] bg-[#f3f3f3] px-7 py-6 md:px-8">
                  <p className="mb-4 text-[18px] font-medium text-[#41557f]">
                    Job Location: {selectedJob.location}
                  </p>

                  <h3 className="mb-4 text-[20px] font-semibold text-[#1f4aa0] md:text-[22px]">
                    {selectedJob.title}
                  </h3>

                  <h4 className="mb-3 text-[18px] font-medium text-[#3f5177]">
                    About Us:
                  </h4>

                  <p className="mb-6 text-[15px] leading-8 text-[#4c5f87] md:text-[16px]">
                    {selectedJob.about}
                  </p>

                  <h4 className="mb-3 text-[18px] font-semibold text-[#3f5177]">
                    What You Will Actually Get to Do and Grow Into:
                  </h4>

                  <ul className="mb-8 list-disc space-y-2 pl-5 text-[15px] leading-8 text-[#4c5f87] md:text-[16px]">
                    {selectedJob.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <h4 className="mb-3 text-[18px] font-semibold text-[#3f5177]">
                    Who This Role Is Perfect For:
                  </h4>

                  <ul className="mb-6 list-disc space-y-2 pl-5 text-[15px] leading-8 text-[#4c5f87] md:text-[16px]">
                    {selectedJob.perfectFor.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {selectedJob.note && (
                    <p className="mb-5 text-[16px] font-semibold text-[#3f5177]">
                      {selectedJob.note}
                    </p>
                  )}

                  {selectedJob.email && (
                    <p className="text-[16px] leading-8 text-[#4c5f87]">
                      Think you fit in?
                      <br />
                      Drop us an email with your resume and few links to your
                      recent work at{" "}
                      <a
                        href={`mailto:${selectedJob.email}`}
                        className="text-[#2b5db2] underline"
                      >
                        {selectedJob.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE APPLY FORM */}
            <div className="rounded-2xl bg-[#ececec] px-7 py-8 md:px-8">
              <h3 className="mb-8 text-[26px] font-semibold text-[#1f4aa0]">
                Apply Now
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="h-[44px] w-full border border-[#e1e1e1] bg-white px-5 text-[16px] text-[#4b5e84] outline-none placeholder:text-[#7f8aa3]"
                />

                <input
                  type="email"
                  placeholder="Email Id*"
                  className="h-[44px] w-full border border-[#e1e1e1] bg-white px-5 text-[16px] text-[#4b5e84] outline-none placeholder:text-[#7f8aa3]"
                />

                <input
                  type="tel"
                  placeholder="Mobile No.*"
                  className="h-[44px] w-full border border-[#e1e1e1] bg-white px-5 text-[16px] text-[#4b5e84] outline-none placeholder:text-[#7f8aa3]"
                />

                <select
                  defaultValue=""
                  className="h-[44px] w-full border border-[#e1e1e1] bg-white px-5 text-[16px] text-[#6d7893] outline-none"
                >
                  <option value="" disabled>
                    -- Select Position --
                  </option>
                  {jobDetails.map((job) => (
                    <option key={job.title} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Message"
                  className="h-[110px] w-full resize-none border border-[#e1e1e1] bg-white px-5 py-4 text-[16px] text-[#4b5e84] outline-none placeholder:text-[#7f8aa3]"
                />

                <div className="pt-2">
                  <label className="mr-2 text-[16px] text-[#4b5e84]">
                    Resume:*
                  </label>
                  <input type="file" className="text-[15px] text-[#4b5e84]" />
                </div>

                <button
                  type="submit"
                  className="mt-3 inline-flex items-center gap-4 bg-[#0e9ad6] px-11 py-3 text-[20px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#0b89be]"
                >
                  Submit
                  <span className="text-2xl leading-none">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white px-6 py-20 text-center">
        <h2 className="mb-12 text-3xl font-semibold italic text-blue-700">
          The numbers say it all!
        </h2>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-4xl font-bold text-blue-900">17+</h3>
            <p>Years of experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">10,000+</h3>
            <p>Projects delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">5,000+</h3>
            <p>Satisfied clients</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-semibold italic text-blue-800">
            World’s leading brands have chosen us. Don’t miss the bus.
          </h2>

          <p className="mb-6 text-blue-700">Collaborate, today!</p>

          <p className="mb-10 text-lg text-gray-700">"{t.text}"</p>

          <div className="flex items-center gap-6">
            <Image src={t.logo} alt="" width={120} height={60} />

            {(t.name || t.role) && (
              <>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="italic text-gray-500">{t.role}</p>
                </div>
              </>
            )}
          </div>

          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTIndex(i)}
                className={`h-3 w-3 rounded-full ${
                  i === tIndex ? "bg-blue-600" : "bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
