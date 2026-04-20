import BrandSection from "@/app/component/BrandSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import Link from "next/link";
import Image from "next/image";
import PortfolioSection from "@/app/component/PortfolioSection";
import ContactDiv from "@/app/component/ContactDiv";

export default function MarketingCommunication() {
  return (
    <main>
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Images */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative z-10 group">
              <Image
                src="/images/billboard.png"
                alt="Marketing Billboard"
                width={580}
                height={420}
                className="rounded-xl border border-gray-300 shadow-md transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-600 leading-snug mb-5">
              Build Powerful Brand Communication
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-5 leading-relaxed text-black">
              Drive Impact with Strategic Marketing Communication
            </h2>

            <p className="text-sm sm:text-base text-black leading-relaxed mb-4">
              At Vedant Innovision, we help your brand communicate with clarity,
              consistency, and purpose. It’s not just about what you say—it’s
              about how effectively your message connects with your audience.
            </p>

            <p className="text-sm sm:text-base text-black leading-relaxed">
              We create strategic brand communication that is clear, engaging,
              and aligned with your overall brand identity—ensuring your message
              stands out and leaves a lasting impact.
            </p>

            <p className="text-sm sm:text-base text-black leading-relaxed">
              From go-to-market strategies to social media, events, and
              corporate communication, we ensure your brand delivers a
              consistent experience across every touchpoint.
            </p>
          </div>
        </div>
      </section>

      <PortfolioSection />

      <BrandSection />

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
