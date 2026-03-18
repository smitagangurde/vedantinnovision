export default function ContactPage() {
  const locations = [
    {
      city: "Pune",
      address: [
        "8th Floor, Olympia Business House,",
        "Next to Supreme HQ,",
        "Bengaluru – Mumbai Highway,",
        "Baner, Pune – 411 045.",
        "Maharashtra, India",
      ],
    },
    {
      city: "Mumbai",
      address: [
        "Gowalia Tank,",
        "Tardeo Road,",
        "South Mumbai – 400 036.",
        "Maharashtra, India",
      ],
    },
    {
      city: "Bengaluru",
      address: [
        "42, 2nd & 3rd Floor, 100 Feet Rd,",
        "Koramangala 4th Block, Koramangala,",
        "Bengaluru – 560 034.",
        "Karnataka, India",
      ],
    },
    {
      city: "Gurugram",
      address: [
        "M-806, Ridgewood Estate,",
        "DLF Phase 5, Near Galleria Market,",
        "Gurugram, Haryana – 122002.",
        "India",
      ],
    },
  ];

  const stats = [
    { value: "17+", label: "Years of experience" },
    { value: "10,000+", label: "Projects delivered" },
    { value: "5,000+", label: "Satisfied clients" },
  ];

  return (
    <main id="top" className="bg-[#f3f3f3]">
      {/* CONTACT SECTION */}
      <section className="min-h-screen bg-[#2f4aa0] text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic leading-snug">
                If you are on this page, you might be seriously considering us.
                <br />
                Go ahead, we&apos;d love to connect!
              </h1>

              <p className="mt-6 text-sm md:text-base font-medium">
                Hello@VelocittaIndia.com
                <span className="mx-2">|</span>
                +91 8956 437 437
              </p>

              {/* FORM */}
              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/60 pb-2 text-sm placeholder:text-white/60 focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Id"
                  className="w-full bg-transparent border-b border-white/60 pb-2 text-sm placeholder:text-white/60 focus:outline-none"
                />

                <input
                  type="tel"
                  placeholder="Mobile No."
                  className="w-full bg-transparent border-b border-white/60 pb-2 text-sm placeholder:text-white/60 focus:outline-none"
                />

                <textarea
                  placeholder="Message"
                  rows={2}
                  className="w-full bg-transparent border-b border-white/60 pb-2 text-sm placeholder:text-white/60 focus:outline-none resize-none"
                />

                {/* Captcha UI */}
                <div className="w-full max-w-[280px] bg-white text-black rounded p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-gray-600" />
                    <span className="text-xs">I&apos;m not a robot</span>
                  </div>
                  <span className="text-[8px] text-gray-500">reCAPTCHA</span>
                </div>

                <button className="bg-[#12B4F6] text-white px-5 py-2 text-sm font-semibold hover:bg-[#0fa4df] transition">
                  SUBMIT →
                </button>
              </form>
            </div>

            {/* RIGHT */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-5">
                Discover the Power of Creative Collaboration
              </h2>

              <ul className="space-y-3 text-sm md:text-base list-disc pl-5">
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
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold italic text-[#2346a0]">
            Our locations
          </h2>

          <div className="border-t mt-8 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((loc) => (
              <div key={loc.city}>
                <h3 className="text-lg font-semibold text-[#2346a0] mb-3">
                  {loc.city}
                </h3>

                <div className="text-sm text-[#2f3f73] space-y-1">
                  {loc.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="pb-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl italic text-[#2346a0] font-semibold">
            The numbers say it all!
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <h3 className="text-3xl md:text-4xl font-semibold italic text-[#3a4a7d]">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm italic text-[#3a4a7d]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Scroll Top */}
          <div className="mt-8">
            <a href="#top" className="text-2xl hover:opacity-70">
              ↑
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
