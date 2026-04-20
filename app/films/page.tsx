"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { CONTACT } from "../const/routes.const";
import ContactDiv from "../component/ContactDiv";
import Testimonial from "../component/Testimonial";
import BrandSection from "../component/BrandSection";
import FilmsPortfolioSection from "../component/Films/FilmsPortfolioSection";
import FilmsApproachSection from "../component/Films/FilmsApprachSection";

const services = [
  {
    title: "Corporate Videos",
    desc: "Showcase your brand story and mission with compelling and informative videos.",
    icon: "/icons/corporate.png",
  },
  {
    title: "Employer Brand Videos",
    desc: "Attract top talent with engaging employer brand videos that showcase your culture.",
    icon: "/icons/employer.png",
  },
  {
    title: "Testimonial/Advocacy Videos",
    desc: "Let your satisfied stakeholders speak for themselves with powerful testimonial videos.",
    icon: "/icons/testimonial.png",
  },
  {
    title: "Brand Films",
    desc: "Build lasting relationships between your brand and consumers.",
    icon: "/icons/brand.png",
  },
];

export default function Films() {
  const [openIndex, setOpenIndex] = useState(3);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [tIndex, setTIndex] = useState(0);
  return (
    <main>
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-8 md:py-10 border-b border-purple-200">
        <div className="max-w-7xl mx-auto grid items-center gap-10 px-4 sm:px-6 md:px-10 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/uiux.png"
              alt="Website and UI UX design"
              width={900}
              height={650}
              className="h-auto w-full max-w-[650px] object-contain opacity-90"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-700 leading-snug">
              Visual Stories
            </h1>

            <p className="text-sm sm:text-base text-black leading-relaxed">
              We create videos and animations that communicate clearly and serve
              real business needs. Our services include corporate video
              production, 2D–3D animation, and digital content creation designed
              to improve engagement and brand visibility.
            </p>

            <p className="text-sm sm:text-base text-black leading-relaxed">
              From induction videos and safety LMS animations to event videos
              and branded content, we focus on delivering clear, engaging, and
              functional communication.
            </p>
          </div>
        </div>
      </section>

      <FilmsPortfolioSection />

      <FilmsApproachSection />

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
