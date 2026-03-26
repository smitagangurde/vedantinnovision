export default function ContactDiv() {
  return (
    <section className="w-full border-t border-purple-900">
      <div className="bg-gradient-to-r from-purple-900 to-black py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-white/80 font-bold mb-3">Contact Us</p>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold italic mb-6 leading-snug text-white">
            We&apos;re easy to talk to. Explore how we can work together!
          </h2>

          <div className="space-y-3 text-sm sm:text-base md:text-lg text-gray-300">
            <p>
              <a
                href="mailto:hello@velocitindia.com"
                className="underline hover:text-yellow-400 transition"
              >
                hello@velocitindia.com
              </a>
            </p>

            <p className="text-xs opacity-70">Or</p>

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
  );
}
