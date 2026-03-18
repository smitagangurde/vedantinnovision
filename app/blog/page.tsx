import Image from "next/image";
import Link from "next/link";

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
      "Office Branding",
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
    title: "How Employer Branding Agencies in the UK Help Attract and Retain Talent",
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
    title: "How to Position Your B2B Brand as an Industry Leader on Social Media",
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
    overlay: [
      "How Social Media",
      "Agencies Are Transforming",
      "B2B Marketing",
    ],
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
    <section className="bg-gradient-to-b from-[#f5f7fb] to-[#f1f1f1] py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-[#2447A5] text-4xl sm:text-5xl md:text-6xl font-bold italic tracking-tight leading-tight">
            Blog
          </h1>

          <p className="mt-4 text-[#2f467d] text-lg sm:text-2xl md:text-4xl italic leading-snug max-w-5xl">
            A curated collection of information in this fast-paced advertising
            world
          </p>
        </div>

        {/* Banner */}
        <div className="w-full overflow-hidden mb-10 md:mb-14 rounded-2xl shadow-md">
          <Image
            src="/blog.png"
            alt="Be inspired be inspiring"
            width={1600}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Blog Cards */}
        <div className="space-y-8 md:space-y-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group grid grid-cols-1 md:grid-cols-[48%_52%] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Left Image */}
              <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 space-y-1.5">
                  {post.overlay.map((line, index) => (
                    <div
                      key={index}
                      className="w-fit bg-[#2447A5]/95 px-2.5 py-1 rounded-sm shadow"
                    >
                      <p className="text-white text-xs sm:text-sm md:text-base leading-tight">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content */}
              <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-[#9a9a9a] text-sm sm:text-base mb-3">
                  {post.date}
                </p>

                <h2 className="text-[#2447A5] text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-4 transition-colors duration-300 group-hover:text-[#173a86]">
                  {post.title}
                </h2>

                <p className="text-[#666] text-sm sm:text-base md:text-lg leading-7 md:leading-8 mb-6">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 bg-[#12a8e0] hover:bg-[#0d95ca] text-white text-sm sm:text-base font-medium px-5 py-3 rounded-md w-fit transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Read more dgeg3e
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}