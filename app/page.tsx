"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "./const/routes.const";
import Testimonial from "./component/Testimonial";
import BrandSection from "./component/BrandSection";

export default function Home() {
  return (
    <main className="bg-black text-white" role="main">
      {/* HERO TEXT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-8 md:pt-12 pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-[var(--brand-purple)] max-w-5xl">
          We help brands define and communicate{" "}
          <br className="hidden md:block" />
          their purpose with clarity and impact
        </h1>
      </section>

      {/* IMAGE SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[540px] overflow-hidden border border-gray-200">
            <Image
              src="/hero.jpg"
              alt="Brand storytelling team"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-black text-gray-300 py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-purple-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* LEFT SIDE */}
          <div className="space-y-16">
            {/* SECTION 1 */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                We are Velocita
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl mb-6">
                In every project we undertake, our aim is to inspire and be
                inspired. As experts in branding, marketing communication, and
                employer branding, we take pride in our 17 year legacy of
                serving clients. By fusing the resources of a large agency with
                the agility of a startup, we empower businesses to shine a
                spotlight on their values and communicate the significance of
                their work through the captivating art of storytelling.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-3 font-semibold hover:opacity-90 transition"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]">
              <Image
                src="/Home-Page-02.jpg"
                alt="Client visuals"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* SECTION 2 */}
            <div>
              <h3 className="text-purple-400 font-semibold text-base mb-2">
                Latest Case Study
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl mb-4">
                We are delighted to share one of our most successful
                collaborations with Knight Frank, where we infused their
                workplace with the richness of Indian art and culture. Guided by
                their global presence and strong Indian identity, we created a
                space that feels authentic, contemporary and deeply connected to
                their ethos. This project remains a milestone, showing how
                meaningful design can bring a brand’s story to life.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-2 font-semibold"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]">
              <Image
                src="/Home-Page-04.jpg"
                alt="Case study"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* SECTION 3 */}
            <div>
              <h3 className="text-purple-400 font-semibold text-base mb-2">
                Films
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl mb-4">
                Our expertise in the realm of videos and films is dedicated to
                bringing your vision to life. From concept development to
                post-production, we meticulously craft each frame with precision
                and creativity, ensuring that your story is told with depth and
                impact. With a focus on cinematic excellence and storytelling
                prowess, we collaborate closely with you to capture the essence
                of your narrative and translate it into an unforgettable visual
                experience.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-2 font-semibold"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-16">
            {/* IMAGE */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]">
              <Image
                src="/Home-Page-01.jpg"
                alt="Branding"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-xl font-semibold text-purple-400 mb-3">
                Brand Communication
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl">
                Our mission is to elevate your brand’s voice and narrative,
                crafting compelling messages that resonate deeply with your
                target audience. Through strategic storytelling and tailored
                communication strategies, we ensure that every interaction with
                your brand leaves a lasting impression. From captivating content
                creation to seamless brand integration, we meticulously curate
                your communication to foster meaningful connections and drive
                engagement.
              </p>

              <Link
                href="#"
                className="inline-flex mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-2 font-semibold"
              >
                LEARN MORE →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]">
              <Image
                src="/Home-Page-03.jpg"
                alt="Employer branding"
                fill
                className="object-contain opacity-90"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-xl font-semibold text-purple-400 mb-3">
                Employer Brand
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl">
                Employer branding revolves around the art of showcasing a
                company’s culture, values, and mission to potential employees,
                all while cultivating a favorable perception among job seekers.
                As seasoned employer branding experts, we are your trusted
                partners in this journey, helping you craft a compelling EVP and
                effectively communicate your distinct employer brand, ultimately
                positioning you as the employer of choice.
              </p>

              <Link
                href="#"
                className="inline-flex mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-2 font-semibold"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="max-w-5xl mx-auto text-center pt-14 mt-12 mb-8">
          <p className="text-base italic text-purple-400 mb-8">
            The numbers say it all!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
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
