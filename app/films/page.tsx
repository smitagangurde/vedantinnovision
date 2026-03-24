"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { CONTACT } from "../const/routes.const";

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

const testimonials = [
  {
    text: `"Honestly I don’t look at Velocita as simply being our agency. They’re more like partners who always have our best interests in mind. An excellent team, with fantastic support! Feels like an extension of our own team. Love it and kudos to Samarth, Ankita, Gaurav & the rest of the team for making our experience so wonderful. I want to offer my congratulations once again to their team for the excellent realisation of our intentions with the design of our collaterals with rocket speed turnaround times. All the best!"`,
    role: "Marketing Manager",
    logo: "/brands/bajaj.png",
  },
  {
    text: `"Working with this team has been seamless. Their creativity and execution are top-notch. We saw real impact across campaigns and brand visibility."`,
    name: "Ankita Mehta",
    role: "Brand Lead",
    logo: "/brands/bcg.png",
  },
  {
    text: `"Exceptional service and dedication. They truly understand business goals and deliver beyond expectations. Highly recommended."`,
    name: "Gaurav Patel",
    role: "Product Head",
    logo: "/Amazon_logo.svg.png",
  },
];

const projects = [
  { src: "/gallery/img1.jpg", title: "Yale Zuri" },
  { src: "/gallery/img2.jpg", title: "Suroj Buildcon" },
  { src: "/gallery/img3.jpg", title: "Amdocs Blossom Marathon" },
  { src: "/gallery/img4.jpg", title: "Michelin" },
  { src: "/gallery/img5.jpg", title: "Brookfield" },
  { src: "/gallery/img6.jpg", title: "Suroj Buildcon" },
  { src: "/gallery/img7.jpg", title: "Yale" },
];

export default function Films() {
  const [openIndex, setOpenIndex] = useState(3);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [tIndex, setTIndex] = useState(0);
  const t = testimonials[tIndex];
  return (
    <main className="bg-black text-white" role="main">
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12">
        {/* Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* LEFT - Hero Image (FIXED) */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Background Circle */}
            <div className="absolute w-[300px] md:w-[420px] lg:w-[520px] h-[300px] md:h-[420px] lg:h-[520px] bg-blue-100 rounded-full left-6 md:left-10 top-6 md:top-10 -z-10" />

            {/* Small Blue Dot */}
            <div className="absolute w-12 md:w-16 h-12 md:h-16 bg-blue-400 rounded-full right-6 md:right-10 top-10 md:top-16" />

            {/* MAIN IMAGE (IMPORTANT CHANGE) */}
            <div className="relative w-[280px] md:w-[420px] lg:w-[520px] h-[220px] md:h-[300px] lg:h-[360px]">
              <Image
                src="/images/films-hero.png" // 🔥 use single combined image
                alt="Films and corporate video showcase"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold text-[var(--brand-purple)]">
              Films / Corporate Videos
            </h1>

            <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Engaging videos and films remain a favorite among audiences and
              serve as a potent communication tool for brands. Whether it’s
              corporate films, advertisements, TV commercials, social media
              videos, or interactive content, we specialize in crafting
              emotionally resonant and unforgettable brand narratives.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-black lg:py-20 px-4 md:px-8 lg:px-16">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-purple-400">
              Captivating Visual Storytelling: Crafting Emotionally Resonant
              Brand Narratives
            </h2>
            <p className="mt-3 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Here's a glimpse of how we've empowered our clients to illuminate
              their brand stories through captivating visual storytelling.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden bg-white"
              >
                {/* Image */}
                <div className="relative w-full h-[260px] md:h-[280px] lg:h-[300px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-black text-gray-300 py-16 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-purple-900">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 italic mb-4">
              Our Approach
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
              We craft compelling narratives that resonate, ensuring your brand
              stands out in a crowded marketplace. Our films are meticulously
              designed to reflect and enhance your brand's identity, fostering a
              strong and authentic connection with your target audience. By
              tapping into the power of emotions, we create memorable
              experiences that inspire action and build lasting relationships
              between your brand and consumers.
            </p>
            <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg">
              Partner with us to elevate your brand through films that
              captivate, connect, and convert.
            </p>
          </div>

          {/* GRID (matches image layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => (
              <div
                key={i}
                className="border border-purple-900 bg-zinc-900 hover:border-yellow-400 transition"
              >
                {/* ICON CENTERED */}
                <div className="flex justify-center mb-6">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                    className="object-cover opacity-90"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-center text-lg md:text-xl font-semibold text-purple-400 mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-center text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-black text-gray-300 py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-purple-900">
        <div className="max-w-5xl mx-auto text-center  border-purple-900 mt-2 mb-20">
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

        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">
            Trusted by Leading Brands
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-4xl text-sm md:text-base mb-10">
            Since 2008, we’ve been creative partners to 100+ global brands and
            Fortune 500 companies, collaborated with numerous businesses and
            delivered 10,000+ projects.
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 border border-purple-900">
            {[
              "/Atlas Copco.jpg",
              "/Ferrero.jpg",
              "/Group Surya.jpg",
              "/Dan Foss.jpg",
              "/JSW Steel.jpg",
              "/Just Porta.jpg",
              "/Grass Roote.jpg",
              "/OP Mobility.jpg",
              "/WIKUS.jpg",
              "/Life Care.jpg",
              "/Atlas.jpg",
              "/Vastushaili.jpg",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-32 md:h-40 lg:h-44 p-4 border border-purple-900 bg-zinc-900 hover:border-yellow-400 transition duration-300"
              >
                <Image
                  src={logo}
                  alt="brand logo"
                  width={200}
                  height={100}
                  className="object-cover w-full h-full max-h-20 md:max-h-28 opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-black)] border-t border-white/10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-[var(--brand-purple)] italic mb-6">
            World’s leading brands have chosen us. Don’t miss the bus.
          </h2>

          <p className="text-[var(--brand-purple)] mb-6">Collaborate, today!</p>

          <p className="text-gray-300 text-lg mb-10">"{t.text}"</p>

          <div className="flex items-center gap-6">
            <Image src={t.logo} alt="" width={120} height={60} />

            {(t.name || t.role) && (
              <>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-gray-500 italic">{t.role}</p>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === tIndex ? "bg-[var(--brand-purple)]" : "bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-t border-purple-900">
        <div className="bg-gradient-to-r from-purple-900 to-black py-14 sm:py-12 sm:py-14 md:py-16 lg:py-20 md:py-20 px-4 sm:px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold italic mb-8 leading-snug text-white">
              We&apos;re easy to talk to. Explore how we can work together!
            </h2>

            <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-300">
              <p>
                <a
                  href="mailto:hello@velocitindia.com"
                  className="underline hover:text-yellow-400 transition"
                >
                  hello@velocitindia.com
                </a>
              </p>

              <p className="text-sm opacity-70">Or</p>

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
          className="bg-gradient-to-b from-yellow-400 to-orange-500 text-black text-sm md:text-base font-bold tracking-widest px-4 py-5 rounded-l-md shadow-lg hover:opacity-90 transition writing-mode-vertical"
        >
          CONTACT
        </Link>
      </div>
    </main>
  );
}
