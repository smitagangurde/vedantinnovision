import { Terminal } from "lucide-react";
import Testimonial from "../component/Testimonial";
import Link from "next/link";
import { CONTACT } from "../const/routes.const";

export default function ContactPage() {
  const locations = [
    {
      city: "Pune",
      address: [
        "Shop No.5/6 Ground floor ,",
        "The Woods society,",
        "Aundh-Ravet BRTS Road,",
        "near kalewadi Phata,",
        "Wakad, Pune – 411 045.",
        "Maharashtra, India",
      ],
    },
    // {
    //   city: "Mumbai",
    //   address: [
    //     "Gowalia Tank,",
    //     "Tardeo Road,",
    //     "South Mumbai – 400 036.",
    //     "Maharashtra, India",
    //   ],
    // },
    // {
    //   city: "Bengaluru",
    //   address: [
    //     "42, 2nd & 3rd Floor, 100 Feet Rd,",
    //     "Koramangala 4th Block,",
    //     "Bengaluru – 560 034.",
    //     "Karnataka, India",
    //   ],
    // },
    // {
    //   city: "Gurugram",
    //   address: [
    //     "M-806, Ridgewood Estate,",
    //     "DLF Phase 5, Near Galleria Market,",
    //     "Gurugram – 122002.",
    //     "India",
    //   ],
    // },
  ];

  const stats = [
    { value: "4+", label: "Years of experience" },
    { value: "1000+", label: "Projects delivered" },
    { value: "50+", label: "Satisfied clients" },
  ];

  return (
    <main>
      <section className="relative w-full bg-gradient-to-b from-gray-300 via-gray-100 to-white py-14 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-left">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold italic mb-6 leading-snug text-purple-700">
            Let&apos;s Create Together
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-3xl">
            We&apos;re excited to collaborate with you on your next design
            project! Whether you have a clear vision in mind or need our
            expertise to bring your ideas to life, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="w-full text-black">
        <div className="bg-gradient-to-r from-purple-900 via-gray-100 py-16 px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* LEFT */}
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold italic leading-snug">
                If you are on this page, you might be seriously considering us.
                <br />
                Go ahead, we&apos;d love to connect!
              </h1>

              <p className="mt-6 text-sm md:text-base text-black/70">
                amitkumar@vedantinnovision.com
                <span className="mx-2">|</span>
                +91 9307267992
              </p>

              {/* FORM */}
              <form className="mt-10 space-y-6">
                {["Name", "Email Id", "Mobile No."].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    className="w-full bg-transparent border-b border-black/30 pb-2 text-sm placeholder:text-black/50 focus:outline-none focus:border-yellow-400 transition"
                  />
                ))}

                <textarea
                  placeholder="Message"
                  rows={2}
                  className="w-full bg-transparent border-b border-black/30 pb-2 text-sm placeholder:text-black/50 focus:outline-none focus:border-yellow-400 transition resize-none"
                />

                {/* CAPTCHA */}
                <div className="w-full max-w-[280px] bg-white/60 border border-black/20 rounded p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-black/40" />
                    <span>I&apos;m not a robot</span>
                  </div>
                  <span className="opacity-60">reCAPTCHA</span>
                </div>

                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-6 py-3 font-semibold hover:opacity-90 transition">
                  SUBMIT →
                </button>
              </form>
            </div>

            {/* RIGHT */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">
                Discover the Power of Creative Collaboration
              </h2>

              <ul className="space-y-3 text-sm md:text-base list-disc pl-5 text-black/70">
                <li>Embark on a Design Journey with Our Team</li>
                <li>Experience Tailored Design Solutions</li>
                <li>Unleash Your Project&apos;s Full Potential</li>
                <li>Transform Your Vision into Reality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className=" py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold italic text-purple-700">
            Our location
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {locations.map((loc) => (
              <div key={loc.city}>
                <h3 className="text-lg font-semibold text-yellow-500 mb-3">
                  {loc.city}
                </h3>

                <div className="text-sm text-black space-y-1">
                  {loc.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full bg-gradient-to-r from-purple-900 via-gray-100 text-black py-16 px-4 sm:px-6 lg:px-16 "
        aria-labelledby="brands-heading"
      >
        <div className="max-w-5xl mx-auto text-center mb-10">
          <p className="text-base italic text-purple-700 mb-8">
            The numbers say it all!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-semibold">4+ </h3>
              <p className="text-black/70 text-sm">Years of experience</p>
            </div>

            <div className="sm:border-x sm:border-purple-900">
              <h3 className="text-3xl font-semibold">800+</h3>
              <p className="text-black/70 text-sm">Projects delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">40+</h3>
              <p className="text-black/70 text-sm">Satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

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
