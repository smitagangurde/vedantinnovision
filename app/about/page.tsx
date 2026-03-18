"use client";

import { useState } from "react";
import Image from "next/image";

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
      "Too much to do and too little time to get it done. We still find a way.",
    image: "/5.png",
    tab: "Sense of urgency",
  },
  {
    id: 6,
    title: "Better today, than yesterday",
    description:
      "There’s always a new and better way to do it, say it, design it. At least that’s what we like to think.",
    image: "/6.png",
    tab: "Continuous improvement",
  },
];

const stats = [
  { value: "17+", label: "Years of experience" },
  { value: "10,000+", label: "Projects delivered" },
  { value: "5,000+", label: "Satisfied clients" },
];

const testimonials = [
  {
    id: 1,
    heading: "World’s leading brands have chosen us. Don’t miss the bus.",
    subheading: "Collaborate, today!",
    quote:
      "Honestly I don’t look at Velocita as simply being our agency. They’re more like partners who always have our best interests in mind. An excellent team, with fantastic support! Feels like an extension of our own team. Love it and kudos to Samarth, Ankita, Gaurav & the rest of the team for making our experience so wonderful.",
    logo: "/logo-bajaj-finserv.png",
    name: "Eshan Sharma",
    role: "Marketing Manager",
    logoWidth: 150,
  },
  {
    id: 2,
    heading: "World’s leading brands have chosen us. Don’t miss the bus.",
    subheading: "Collaborate, today!",
    quote:
      "Thank you for all of your contributions in the difficult and condensed design effort. You did very well and hope to have the chance to work with you again. If ok, I may personally refer you to teams I work with in the future if you'd like to consider their design work.",
    logo: "/logo-bajaj-finserv.png",
    name: "",
    role: "",
    logoWidth: 150,
  },
  {
    id: 3,
    heading: "World’s leading brands have chosen us. Don’t miss the bus.",
    subheading: "Collaborate, today!",
    quote:
      "We've found our association with Velocita extremely fruitful for our communication needs. The passion and speed with which they work resonate well with our brand values. For a creative agency that can be best described as niche, they are quite a powerhouse with an ever widening portfolio of outstanding creative work.",
    logo: "/logo-bajaj-finserv.png",
    name: "Yogesh Gandhi",
    role: "Marketing & Communications Specialist",
    logoWidth: 150,
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cultureData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cultureData.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = cultureData[activeIndex];
  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <main className="bg-[#f5f5f3] text-[#2446A0]">
      {/* HERO / ABOUT */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-14 py-8 md:py-10">
        <div className="max-w-[1450px] mx-auto">
          <div className="max-w-[760px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold italic leading-tight">
              We are Velocitta
            </h1>

            <h2 className="mt-3 text-[#33456f] text-xl sm:text-2xl md:text-3xl italic font-medium leading-snug">
              We collaborate with brands to influence what comes next.
            </h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl">
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/1.png"
                alt="Vedant Innovision office"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-[#42527a]">
            <div className="space-y-5">
              <p className="text-[15px] sm:text-base md:text-lg leading-8">
                In each project we embark upon, our mission is twofold: to
                inspire and to be inspired. As seasoned experts in branding,
                marketing communication, and employer branding, we take immense
                pride in our 16 year legacy of serving our valued clients.
              </p>

              <p className="text-[15px] sm:text-base md:text-lg leading-8">
                Our unique approach combines the resources of a larger agency
                with the nimbleness of a startup, empowering businesses to
                spotlight their core values and convey the significance of their
                work through the captivating art of storytelling.
              </p>

              <p className="text-[15px] sm:text-base md:text-lg leading-8">
                Yet, our commitment extends beyond delivering exceptional
                results for our clients. We are equally dedicated to cultivating
                a thriving, supportive, and inclusive work environment for our
                team.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-[15px] sm:text-base md:text-lg leading-8">
                We firmly believe that the happiness and motivation of our
                employees are fundamental to our success, and their unwavering
                passion and dedication shine through in every endeavor.
              </p>

              <p className="text-[15px] sm:text-base md:text-lg leading-8">
                Within Velocitta India, we’ve cultivated a culture that not only
                places high value on our clients’ objectives but also recognizes
                the profound importance of nurturing our internal talent.
              </p>

              <p className="text-[15px] sm:text-base md:text-lg leading-8">
                We are more than just an advertising agency; we are a close-knit
                community of creative minds driven by a collective passion for
                excellence and a profound appreciation for those who contribute
                to our shared success.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-[#d9d9d9]" />
        </div>
      </section>

      {/* CULTURE SLIDER */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-14 pb-12 md:pb-14">
        <div className="max-w-[1450px] mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl italic font-semibold leading-tight">
            Our culture and values mean a lot to us—like, a lot.
          </h2>

          <div className="mt-6 rounded-2xl bg-white/60 px-4 sm:px-6 md:px-8 py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left */}
              <div className="order-2 lg:order-1">
                <h3 className="text-[#2446A0] font-bold leading-[0.95] tracking-[-0.03em] text-[34px] sm:text-[48px] md:text-[60px] lg:text-[68px] max-w-[620px]">
                  {activeSlide.title}
                </h3>

                <p className="mt-6 text-[#43527a] text-lg sm:text-xl md:text-2xl leading-relaxed max-w-[650px]">
                  {activeSlide.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="h-11 w-11 rounded-full border border-[#2446A0]/20 bg-white text-[#2446A0] text-3xl leading-none hover:bg-[#2446A0] hover:text-white transition"
                  >
                    ‹
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="h-11 w-11 rounded-full border border-[#2446A0]/20 bg-white text-[#2446A0] text-3xl leading-none hover:bg-[#2446A0] hover:text-white transition"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Right */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-[620px] h-[240px] sm:h-[320px] md:h-[420px] lg:h-[460px]">
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.tab}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {cultureData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-3 py-2 text-xs sm:text-sm md:text-base font-medium transition ${
                    activeIndex === index
                      ? "bg-[#2446A0] text-white"
                      : "text-[#9aa6c7] hover:text-[#2446A0] hover:bg-[#eef2ff]"
                  }`}
                >
                  {item.tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS SECTION */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-14 pb-12 md:pb-16">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-[#2446A0] text-2xl md:text-3xl italic font-semibold">
            The numbers say it all!
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center px-4 py-5 ${
                  index !== stats.length - 1
                    ? "md:border-r md:border-[#555]/40"
                    : ""
                }`}
              >
                <h3 className="text-[#3b4877] text-4xl md:text-5xl italic font-semibold">
                  {stat.value}
                </h3>
                <p className="mt-3 text-[#3b4877] text-lg md:text-xl italic">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-14 pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="max-w-[560px] text-[#2446A0] text-2xl sm:text-3xl md:text-4xl italic font-semibold leading-snug">
            {currentTestimonial.heading}
          </h2>

          <p className="mt-5 text-[#33456f] text-lg sm:text-xl md:text-2xl">
            {currentTestimonial.subheading}
          </p>

          <p className="mt-8 text-[#3f3f3f] text-base sm:text-lg md:text-xl leading-8 max-w-[1000px]">
            "{currentTestimonial.quote}"
          </p>

          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
              <div className="relative h-[50px] w-[150px]">
                <Image
                  src={currentTestimonial.logo}
                  alt="Client logo"
                  width={currentTestimonial.logoWidth}
                  height={60}
                  className="object-contain h-auto"
                />
              </div>

              {currentTestimonial.name && (
                <div className="md:border-l md:border-[#bdbdbd] md:pl-5">
                  <h3 className="text-[#4a4a4a] text-lg md:text-xl font-semibold">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-[#666] text-base md:text-lg italic">
                    {currentTestimonial.role}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-3.5 w-3.5 rounded-full transition ${
                    activeTestimonial === index
                      ? "bg-[#2f80ed]"
                      : "bg-[#555] hover:bg-[#2446A0]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
