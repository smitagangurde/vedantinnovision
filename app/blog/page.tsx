import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "../const/routes.const";

const blogPosts = [
  {
    id: 1,
    date: "October 1, 2025",
    title: "Why Neglecting Office Branding Weakens Brand Identity Over Time",
    excerpt:
      "Neglecting office branding weakens brand identity by creating an incoherent and untrustworthy image, which confuses customers, hinders recognition, and reduces loyalty. A strong, well-defined brand environment supports trust, consistency, and engagement.",
    image: "/blog1.png",
    slug: "why-neglecting-office-branding-weakens-brand-identity-over-time",
    overlay: [
      "Why Neglecting",
      "Spatial Branding",
      "Weakens Brand Identity",
      "Over Time",
    ],
  },
  {
    id: 2,
    date: "September 30, 2025",
    title: "How Consistent Office Branding Strengthens Corporate Identity",
    excerpt:
      "In today's competitive business landscape, companies are no longer recognized only by their products or services—they are remembered by the identity they project. One of the most powerful ways to reinforce that identity is through consistent office branding.",
    image: "/blog2.png",
    slug: "how-consistent-office-branding-strengthens-corporate-identity",
    overlay: [
      "How Consistent",
      "Office Branding Strengthens",
      "Corporate Identity",
    ],
  },
  {
    id: 3,
    date: "August 26, 2025",
    title:
      "The Employee Value Proposition (EVP) and Employer Brand: Essential Elements in Recruitment Marketing",
    excerpt:
      "Today's candidates don't just apply for jobs; they choose employers whose values align with their own. In this transformed landscape of talent acquisition, the traditional approach of posting job descriptions and waiting for applications has become obsolete.",
    image: "/blog3.png",
    slug: "employee-value-proposition-evp-and-employer-brand",
    overlay: [
      "The Employee Value Proposition",
      "(EVP) and Employer Brand",
      "Essential Elements in",
      "Recruitment Marketing",
    ],
  },
  {
    id: 4,
    date: "August 19, 2025",
    title: "How a Strong EVP Reduces Attrition and Increases Retention",
    excerpt:
      "Employees don't just work for salaries; they stay where they feel valued, supported, and inspired. In today's competitive talent market, offering a paycheck alone is no longer enough.",
    image: "/blog4.png",
    slug: "how-a-strong-evp-reduces-attrition-and-increases-retention",
    overlay: [
      "How a Strong EVP",
      "Reduces Attrition",
      "and Increases Retention",
    ],
  },
  {
    id: 5,
    date: "August 12, 2025",
    title: "The Strategic Role of EVP in Building a Sustainable Talent Brand",
    excerpt:
      "Why EVP matters in today's talent landscape. In an era where talent competition has reached unprecedented levels and employee expectations continue to evolve, organizations are scrambling to differentiate themselves as employers of choice.",
    image: "/blog5.png",
    slug: "strategic-role-of-evp-in-building-a-sustainable-talent-brand",
    overlay: [
      "The Strategic Role of",
      "EVP in Building a",
      "Sustainable Talent Brand",
    ],
  },
  {
    id: 6,
    date: "August 5, 2025",
    title:
      "How Employer Branding Agencies in the UK Help Attract and Retain Talent",
    excerpt:
      "In today's competitive talent landscape, UK organisations are facing unprecedented challenges in attracting and retaining top talent. With skills shortages across key sectors and employee expectations evolving rapidly, businesses are turning to employer branding agencies.",
    image: "/blog6.png",
    slug: "how-employer-branding-agencies-in-the-uk-help-attract-and-retain-talent",
    overlay: [
      "How Employer Branding",
      "Agencies in the UK",
      "Help Attract and",
      "Retain Talent",
    ],
  },
  {
    id: 7,
    date: "July 22, 2025",
    title:
      "How to Position Your B2B Brand as an Industry Leader on Social Media",
    excerpt:
      "In the dynamic world of B2B, simply having a product or service isn't enough. To truly stand out and attract the right clients, your brand needs to be recognized as an authority and go-to source for insights and solutions.",
    image: "/blog7.png",
    slug: "how-to-position-your-b2b-brand-as-an-industry-leader-on-social-media",
    overlay: [
      "How to Position Your",
      "B2B Brand as an Industry",
      "Leader on Social Media",
    ],
  },
  {
    id: 8,
    date: "July 15, 2025",
    title: "How Social Media Agencies Are Transforming B2B Marketing",
    excerpt:
      "Is your B2B social media strategy feeling stagnant? In today's dynamic digital landscape, social media isn't just for consumer brands anymore. It's a powerful engine for growth and visibility.",
    image: "/blog8.png",
    slug: "how-social-media-agencies-are-transforming-b2b-marketing",
    overlay: ["How Social Media", "Agencies Are Transforming", "B2B Marketing"],
  },
  {
    id: 9,
    date: "July 8, 2025",
    title: "Why B2B Social Media Is a Smart Investment, Not Just a Trend",
    excerpt:
      "Let's address the elephant in the room: many business leaders still believe that social media is just for B2C companies. This outdated misconception has prevented many B2B organizations from making the most of valuable opportunities.",
    image: "/blog9.png",
    slug: "why-b2b-social-media-is-a-smart-investment-not-just-a-trend",
    overlay: [
      "Why B2B Social Media",
      "Is a Smart Investment,",
      "Not Just a Trend",
    ],
  },
  {
    id: 10,
    date: "July 1, 2025",
    title: "Why Inconsistent Branding Is Hurting Your Business Online",
    excerpt:
      "In today's dynamic digital landscape, where attention is a valuable commodity and competition is strong, brand consistency isn't simply a good practice or a current trend. It means presenting a balanced and unified image across all platforms.",
    image: "/blog10.png",
    slug: "why-inconsistent-branding-is-hurting-your-business-online",
    overlay: [
      "Why Inconsistent",
      "Branding Is Hurting",
      "Your Business Online",
    ],
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white px-4 sm:px-6 md:px-10 lg:px-16 py-8 text-black">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Heading */}
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold italic text-purple-700">
              Blog
            </h1>

            <p className="text-gray-700 text-lg md:text-xl italic">
              A curated collection of information in this fast-paced advertising
              world
            </p>
          </div>

          {/* Banner */}
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px] rounded-md overflow-hidden shadow-sm">
            <Image
              src="/blog.png"
              alt="Be inspired be inspiring"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Blog Cards */}
          <div className="space-y-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-10 "
              >
                {/* Image */}
                <div className="relative w-full h-[260px] sm:h-[300px] md:h-[360px] rounded-md overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 max-w-xl">
                  <p className="text-gray-500 text-sm">{post.date}</p>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700 leading-snug group-hover:opacity-80 transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
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
    </main>
  );
}
