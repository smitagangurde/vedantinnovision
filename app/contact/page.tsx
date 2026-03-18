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
        "Koramangala 4th Block,",
        "Bengaluru – 560 034.",
        "Karnataka, India",
      ],
    },
    {
      city: "Gurugram",
      address: [
        "M-806, Ridgewood Estate,",
        "DLF Phase 5, Near Galleria Market,",
        "Gurugram – 122002.",
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
    <main id="top" className="bg-black text-gray-300">
      {/* CONTACT SECTION */}
      <section className="border-t border-purple-900 py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* LEFT */}
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold italic text-purple-400 leading-snug">
              If you are on this page, you might be seriously considering us.
              <br />
              Go ahead, we&apos;d love to connect!
            </h1>

            <p className="mt-6 text-sm md:text-base text-gray-400">
              hello@velocitindia.com
              <span className="mx-2">|</span>
              +91 8956 437 437
            </p>

            {/* FORM */}
            <form className="mt-10 space-y-6">
              {["Name", "Email Id", "Mobile No."].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  className="w-full bg-transparent border-b border-purple-900 pb-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 transition"
                />
              ))}

              <textarea
                placeholder="Message"
                rows={2}
                className="w-full bg-transparent border-b border-purple-900 pb-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 transition resize-none"
              />

              {/* CAPTCHA (styled to match theme) */}
              <div className="w-full max-w-[280px] bg-zinc-900 border border-purple-900 rounded p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-gray-400" />
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
            <h2 className="text-xl md:text-2xl font-semibold text-purple-400 mb-6">
              Discover the Power of Creative Collaboration
            </h2>

            <ul className="space-y-3 text-sm md:text-base list-disc pl-5 text-gray-400">
              <li>Embark on a Design Journey with Our Team</li>
              <li>Experience Tailored Design Solutions</li>
              <li>Unleash Your Project&apos;s Full Potential</li>
              <li>Transform Your Vision into Reality</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="border-t border-purple-900 py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold italic text-purple-400">
            Our locations
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {locations.map((loc) => (
              <div key={loc.city}>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {loc.city}
                </h3>

                <div className="text-sm text-gray-400 space-y-1">
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
      <section className="border-t border-purple-900 py-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base italic text-purple-400 mb-10">
            The numbers say it all!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl font-semibold text-white">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>  
        </div>
      </section>
      
    </main>
  );
}