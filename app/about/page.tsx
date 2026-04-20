"use client";

import Image from "next/image";
import Testimonial from "../component/Testimonial";
import ContactDiv from "../component/ContactDiv";
import Link from "next/link";
import { CONTACT } from "../const/routes.const";
import { useState, useEffect } from "react";

const cultureData = [
  {
    id: 1,
    title: "Do it right. Every time.",
    description:
      "We operate with clarity, honesty, and accountability across every stage — from concept to execution. Our focus is on building trust through consistent and responsible delivery.",
    image: "/7.png",
    tab: "Integrity First",
  },
  {
    id: 2,
    title: "Built on clarity and connection.",
    description:
      "We keep communication simple and direct. By working closely with our clients, we ensure alignment, faster decisions, and smoother execution across every project.",
    image: "/2.png",
    tab: "Open Collaboration",
  },
  {
    id: 3,
    title: "We own the outcome.",
    description:
      "From strategy to final delivery, we take complete responsibility. Every detail matters, and we ensure the final result meets both creative and business expectations.",
    image: "/3.png",
    tab: "Full Accountability",
  },
  {
    id: 4,
    title: "Energy that reflects in every output.",
    description:
      "We approach every project with intent and focus — combining creativity, design, and technology to deliver work that is both impactful and meaningful.",
    image: "/4.png",
    tab: "Purpose-Driven Work",
  },
  {
    id: 5,
    title: "Fast where it matters. Precise where it counts.",
    description:
      "We balance speed with quality, ensuring timelines are met without cutting corners. Efficient workflows allow us to deliver consistently and reliably.",
    image: "/5.png",
    tab: "Execution Speed",
  },
  {
    id: 6,
    title: "Progress is part of the process.",
    description:
      "We adapt, improve, and refine with every project. By staying updated with design trends, technology, and industry shifts, we ensure our work remains relevant and effective.",
    image: "/6.png",
    tab: "Continuous Evolution",
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cultureData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cultureData.length - 1 ? 0 : prev + 1));
  };

  // ✅ AUTO SLIDE (4 sec)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === cultureData.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, cultureData.length]);

  const activeSlide = cultureData[activeIndex];

  return (
    <main>
      {/* HERO */}
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white px-4 sm:px-6 md:px-10 lg:px-16 py-12 text-black">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold italic text-purple-700">
              We are Vedant Innovision
            </h1>

            <h2 className="mt-3 text-black text-lg sm:text-xl md:text-2xl italic">
              End-to-end branding, design, and technology solutions built to
              perform.
            </h2>
          </div>

          {/* Image */}
          <div className="mt-8">
            <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-md shadow-sm">
              <Image src="/1.png" alt="Office" fill className="object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-6 max-w-xl">
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                Vedant Innovision is a full-spectrum creative and technology
                agency delivering integrated solutions across branding, design,
                animation, print, production, hardware, and software. We partner
                with businesses to transform ideas into tangible experiences —
                from identity creation and visual storytelling to robust digital
                and physical implementations.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                Our strength lies in connecting creativity with execution.
                Whether it’s building a brand from the ground up, producing
                high-impact visuals, or developing scalable tech solutions, we
                ensure every output is aligned with business objectives and
                built for long-term value.
              </p>
            </div>

            <div className="space-y-6 max-w-xl">
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                We operate at the intersection of design, engineering, and
                innovation. Our team brings together strategists, designers,
                developers, and production experts to deliver solutions that are
                not only visually compelling but also technically sound and
                execution-ready.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                From concept to completion, Vedant Innovision functions as a
                single-point partner — simplifying processes, maintaining
                consistency, and ensuring quality across every touchpoint. We
                focus on creating solutions that are practical, scalable, and
                built to adapt as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
            Our culture and values mean a lot to us
          </h2>

          <div className="mt-8 rounded-xl p-6 md:p-10 bg-white shadow-sm">
            {/* SLIDER WRAPPER */}
            <div className="overflow-hidden relative">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {cultureData.map((item, index) => (
                  <div
                    key={item.id}
                    className="w-full flex-shrink-0 grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* TEXT */}
                    <div>
                      <h3 className="text-3xl md:text-4xl font-semibold text-purple-700">
                        {item.title}
                      </h3>

                      <p className="mt-6 text-black text-base md:text-lg max-w-xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* IMAGE */}
                    <div className="relative w-full h-[300px] md:h-[420px]">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover rounded-md shadow-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TABS */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {cultureData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-3 py-2 text-sm rounded-full transition ${
                    activeIndex === index
                      ? "bg-purple-400 text-white"
                      : "text-black hover:bg-purple-100 hover:text-purple-600"
                  }`}
                >
                  {item.tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white text-black py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto text-center mb-14">
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
