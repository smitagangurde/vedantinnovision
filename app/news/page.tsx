import Image from "next/image";
import Link from "next/link";
import ContactDiv from "../component/ContactDiv";
import Testimonial from "../component/Testimonial";
import { CONTACT } from "../const/routes.const";

const milestones = [
  {
    year: "2025",
    title: "Most Renowned Employer Branding Agency",
    desc: `Recognised for delivering high-impact branding solutions that transform organisational reputations and drive elite talent engagement. This award celebrates our passion for creating authentic brand experiences that inspire and retain the world's top professionals.`,
    image: "/award1.png",
  },
  {
    year: "2024",
    title: "The afaqs! Marketers’ Excellence Award",
    desc: `Recognised for excellence in shaping powerful employer brands that drive measurable organisational growth. This award highlights the agency’s leadership in crafting strategic narratives that strengthen our clientele’s position and presence in the industry.`,
    image: "/award2.png",
  },
];

const announcements = [
  {
    date: "January 22, 2026",
    title:
      "Employer Branding in India: Why the Next Five Years Will Redefine the Talent Landscape",
    desc: `In this article, Samarth Singh, Director and Employer Brand Expert at  Vedant Innovision India, explains that employer branding in India is becoming a strategic imperative, driven by changing talent expectations, AI-led role shifts, GCC growth, and the need for authentic, consistent, long-term brand narratives.`,
  },
  {
    date: "May 10, 2025",
    title:
      "Unlocking business Potential Through Effective Employer Branding and Talent Solutions",
    desc: `In today’s rapidly evolving market, technological advancements and heightened competition have made it critical for companies to not only establish a strong presence but also to build a compelling brand.`,
  },
];

export default function News() {
  return (
    <main>
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* HEADING */}
          <div className="space-y-3 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-700 italic">
              News & Awards
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              Discover insights, opinions and ideas from our experts
            </p>
          </div>

          {/* BANNER */}
          <div className="w-full relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] rounded-md overflow-hidden shadow-sm">
            <Image
              src="/banner-awards.png"
              alt="Awards Banner"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* SUB HEADING */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700">
            Award-Winning Milestones
          </h2>

          {/* MILESTONES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {milestones.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 flex flex-col lg:flex-row items-center gap-6 hover:border-purple-400 hover:shadow-md transition"
              >
                {/* TEXT */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-purple-700">
                    {item.year}
                  </h3>

                  <h4 className="text-base sm:text-lg font-semibold text-black">
                    {item.title}
                  </h4>

                  <div className="w-10 h-[2px] bg-purple-200 my-2" />

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative w-full sm:w-[220px] h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ANNOUNCEMENTS */}
          <div className="space-y-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700 italic">
              Latest Announcements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {announcements.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 sm:p-8 md:p-10 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition"
                >
                  {/* Date */}
                  <p className="text-sm text-gray-500 mb-3">{item.date}</p>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-700 leading-snug mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="max-w-7xl mx-auto text-center mt-16 mb-8">
          <p className="text-base italic text-purple-700 mb-8">
            The numbers say it all!
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-semibold text-black">4+</h3>
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
