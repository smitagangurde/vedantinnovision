import BrandSection from "@/app/component/BrandSection";
import Testimonial from "@/app/component/Testimonial";
import { CONTACT } from "@/app/const/routes.const";
import Link from "next/link";
import Image from "next/image";
import PortfolioSection from "@/app/component/PortfolioSection";

export default function MarketingCommunication() {
  return (
    <main className="bg-black text-white" role="main">
      <section className="w-full bg-[var(--brand-black)] text-white pt-12 pb-10 md:pt-14 md:pb-12 border-b border-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Images */}
          <div className="relative flex justify-center md:justify-start">
            {/* Billboard */}
            <div className="relative z-10">
              <Image
                src="/images/billboard.png"
                alt="Marketing Billboard"
                width={580}
                height={420}
                className="rounded-xl border border-white/10 shadow-lg"
              />
            </div>
          </div>

          {/* RIGHT: Content */}  
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--brand-purple)] leading-snug mb-5">
              Embrace Excellence:
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-5 leading-relaxed">
              Unleash Your Brand’s Dominance with Our Marketing Communications
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
              Imagine your brand had a voice, one that resonated deeply with
              your audience. It’s not just about the message itself; it’s about
              the way that message is conveyed. At our core, we excel in the art
              of crafting your brand’s persona, communicating in ways that make
              it memorable, and even working with a ghostwriter to perfect your
              narrative. We specialize in uncovering the distinctive qualities
              that captivate your audience’s attention.
            </p>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Whether it’s your go-to-market communication strategy, managing
              social media presence and reputation, events participation or the
              meticulous handling of compliance reporting – we are here to
              ensure your brand radiates brilliance in every facet.
            </p>
          </div>
        </div>
      </section>

      <PortfolioSection />

      <BrandSection />

      <Testimonial />

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
    </main>
  );
}
