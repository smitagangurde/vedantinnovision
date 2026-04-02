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
    title: "Ethics above everything",
    description:
      "We’re honest in what we do and integrity matters to us. Always.",
    image: "/7.png",
    tab: "Ethical",
  },
  {
    id: 2,
    title: "We are people people",
    description:
      "Work happens faster when done in teams. We like being around people, even the ones that like to annoy us.",
    image: "/2.png",
    tab: "Approachable",
  },
  {
    id: 3,
    title: "We own it, never own up",
    description:
      "No job is too small or too big. If we’re asked to get something done, we own it and do it.",
    image: "/3.png",
    tab: "Ownership",
  },
  {
    id: 4,
    title: "Our superpower is staying hungry, staying foolish",
    description:
      "We love pizzas and burgers and compliments. We love our work too. Sometimes. No—Always.",
    image: "/4.png",
    tab: "Passion",
  },
  {
    id: 5,
    title: "We are always finding I’s to dot or T’s to cross.",
    description:
      "Too much to do and too little time, but we always find a way.",
    image: "/5.png",
    tab: "Urgency",
  },
  {
    id: 6,
    title: "Better today, than yesterday",
    description:
      "There’s always a new and better way to do it, say it, design it. At least that’s what we like to think.",
    image: "/6.png",
    tab: "Growth",
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
              We collaborate with brands to influence what comes next.
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
                In each project we embark upon, our mission is twofold: to
                inspire and to be inspired. As seasoned experts in branding,
                marketing communication, and employer branding, we take immense
                pride in our 16 year legacy of serving our valued clients. Our
                unique approach combines the resources of a larger agency with
                the nimbleness of a startup, empowering businesses to spotlight
                their core values and convey the significance of their work
                through the captivating art of storytelling.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                Yet, our commitment extends beyond delivering exceptional
                results for our clients. We are equally dedicated to cultivating
                a thriving, supportive, and inclusive work environment for our
                team.
              </p>
            </div>

            <div className="space-y-6 max-w-xl">
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                We firmly believe that the happiness and motivation of our
                employees are fundamental to our success, and their unwavering
                passion and dedication shine through in every endeavor.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                Within Vedant Innovision India, we’ve cultivated a culture that
                not only places high value on our clients’ objectives but also
                recognizes the profound importance of nurturing our internal
                talent. We are more than just an advertising agency; we are a
                close-knit community of creative minds driven by a collective
                passion for excellence and a profound appreciation for those who
                contribute to our shared success – both our cherished clients
                and our exceptional team.
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
              <h3 className="text-3xl font-semibold text-black">1000+</h3>
              <p className="text-gray-600 text-sm">Projects delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-black">50+</h3>
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
