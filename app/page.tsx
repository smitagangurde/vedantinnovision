"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ABOUT,
  BRANDIDENTITY,
  CONTACT,
  EMPLOYERBRANDING,
  FILMS,
  NEWS,
} from "./const/routes.const";
import Testimonial from "./component/Testimonial";
import BrandSection from "./component/BrandSection";
import ContactDiv from "./component/ContactDiv";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white px-4 sm:px-6 md:px-10 pt-8 md:pt-12 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* HERO TEXT */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-purple-700 max-w-5xl mb-10">
            We help brands define and communicate{" "}
            <br className="hidden md:block" />
            their purpose with clarity and impact
          </h1>

          {/* IMAGE */}
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

      <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* LEFT SIDE */}
          <div className="space-y-16">
            {/* SECTION 1 */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                We are Vedant Innovision
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl mb-6">
                In every project we undertake, our aim is to inspire and be
                inspired. As experts in branding, marketing communication, and
                employer branding, we take pride in our 4+ legacy of
                serving clients. By fusing the resources of a large agency with
                the agility of a startup, we empower businesses to shine a
                spotlight on their values and communicate the significance of
                their work through the captivating art of storytelling.
              </p>

              <Link
                href={ABOUT}
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
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                Latest Case Study
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl mb-4">
                We are delighted to share one of our most successful
                collaborations with Knight Frank, where we infused their
                workplace with the richness of Indian art and culture. Guided by
                their global presence and strong Indian identity, we created a
                space that feels authentic, contemporary and deeply connected to
                their ethos. This project remains a milestone, showing how
                meaningful design can bring a brand’s story to life.
              </p>

              <Link
                href={NEWS}
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
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                Films
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl mb-4">
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
                href={FILMS}
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
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                Brand Communication
              </h2>
              
              
              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl">
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
                href={BRANDIDENTITY}
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
               <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                 Employer Brand
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-full sm:max-w-xl">
                Employer branding revolves around the art of showcasing a
                company’s culture, values, and mission to potential employees,
                all while cultivating a favorable perception among job seekers.
                As seasoned employer branding experts, we are your trusted
                partners in this journey, helping you craft a compelling EVP and
                effectively communicate your distinct employer brand, ultimately
                positioning you as the employer of choice.
              </p>

              <Link
                href={EMPLOYERBRANDING}
                className="inline-flex mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-5 py-2 font-semibold"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
        </div>
      </section>

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
