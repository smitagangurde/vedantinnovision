"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CareerPage() {
  const jobs = [
    "Business Development",
    "Motion Graphics Designer",
    "Video Editor",
    "Graphic Designer",
    "Copywriter",
    "Client Servicing",
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const testimonials = [
    {
      text: `Honestly I don’t look at Velocita as simply being our agency. They’re more like partners who always have our best interests in mind. An excellent team, with fantastic support! Feels like an extension of our own team.`,
      name: "Eshan Sharma",
      role: "Marketing Manager",
      logo: "/logo-bajaj-finserv.png",
    },
    {
      text: `Thank you for all of your contributions in the difficult and condensed design effort. You did very well and hope to have the chance to work with you again.`,
      name: "",
      role: "",
      logo: "/logo-bajaj-finserv.png",
    },
    {
      text: `We've found our association with Velocita extremely fruitful for our communication needs. The passion and speed with which they work resonate well with our brand values.`,
      name: "Yogesh Gandhi",
      role: "Marketing & Communications Specialist",
      logo: "/logo-bajaj-finserv.png",
    },
  ];

  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[tIndex];

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-800 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Calling all creative minds!
          </h1>

          <p className="text-lg max-w-2xl">
            We’re always open to new ideas, new people & new experiences.
          </p>

          <div className="mt-10">
            <Image
              src="/firstimage.jpg"
              alt="Creative team"
              width={1200}
              height={600}
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 italic mb-6">
            Why Vedant Innovision?
          </h2>

          <p className="text-gray-700 mb-4">
            Having a place where you are valued, nurtured and given the freedom
            to stretch your creative boundaries is important. Velocitta strives
            to be that place for you!
          </p>

          <p className="text-gray-700">
            We welcome people who have a flair for creativity, a passion for
            excellence and who can take projects to a whole new level of
            awesome. At Velocita, we create a warm, nurturing environment where
            everyone, from freshers to experienced employees, can grow their
            careers on their own terms.
          </p>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl grid md:grid-cols-2 gap-12 mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800 italic mb-4">
              We’re learning every day
            </h2>

            <p className="text-gray-700">
              In the creative world, there’s always something new to learn,
              explore and experience. Here at Velocita, we believe in never
              growing up.
            </p>

            <p className="text-gray-700 mt-4">
              So we always encourage everyone to lend each other a hand, but
              more importantly, give each other the nudge to bring newer and
              crazier ideas into the meeting rooms.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800 italic mb-4">
              We’re all for complete inclusivity
            </h2>

            <p className="text-gray-700">
              Ideas can come from anywhere if you keep your hearts and minds
              open to them.
            </p>

            <p className="text-gray-700 mt-4">
              If your skills and abilities fit the job, we make sure the rest
              just falls into place.
            </p>
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl grid md:grid-cols-2 gap-12 mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Open Positions
            </h2>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`p-4 rounded-lg cursor-pointer border ${
                    selectedIndex === index
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white hover:shadow"
                  }`}
                >
                  {job}
                </div>
              ))}
            </div>
          </div>

          <div>
            {selectedIndex !== null ? (
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-700">
                  {jobs[selectedIndex]}
                </h3>

                <p className="text-gray-600 mt-2">Job Location: Pune</p>

                <p className="text-gray-700 mt-4">
                  For over 17 years, we have helped organizations define who
                  they truly are and bring that identity to life.
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                Select a job →
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-blue-700 italic mb-12">
          The numbers say it all!
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold text-blue-900">17+</h3>
            <p>Years of experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">10,000+</h3>
            <p>Projects delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">5,000+</h3>
            <p>Satisfied clients</p>
          </div>
        </div>
      </section>

      {/* APPLY NOW */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl border">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-700">Apply Now</h2>
            <p className="text-gray-500 mt-2">
              Take the next step in your career with us
            </p>
          </div>

          <form className="grid gap-6">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Mobile No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Select Position <span className="text-red-500">*</span>
                </label>
                <select
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option>-- Select Position --</option>
                  {jobs.map((job, index) => (
                    <option key={index}>{job}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Tell us about yourself..."
                className="mt-2 w-full border rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Resume <span className="text-red-500">*</span>
              </label>

              <div className="mt-2 flex items-center justify-between border-2 border-dashed rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition">
                <input
                  type="file"
                  className="w-full text-gray-600 cursor-pointer"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition shadow-md"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 italic mb-6">
            World’s leading brands have chosen us. Don’t miss the bus.
          </h2>

          <p className="text-blue-700 mb-6">Collaborate, today!</p>

          <p className="text-gray-700 text-lg mb-10">"{t.text}"</p>

          <div className="flex items-center gap-6">
            <Image src={t.logo} alt="" width={120} height={60} />

            {(t.name || t.role) && (
              <>
                <div className="w-px h-12 bg-gray-300"></div>
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
                  i === tIndex ? "bg-blue-600" : "bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
