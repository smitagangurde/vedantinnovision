export default function ContactDiv() {
  return ( 
    <section className="w-full  text-black">
      <div className="bg-gradient-to-r from-purple-900 via-gray-100 py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-m  font-bold mb-3">Contact Us</p>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold italic mb-6 leading-snug ">
           We are approachable and easy to communicate with. Discover how we can collaborate effectively.
          </h2>

          <div className="space-y-3 text-sm sm:text-base md:text-lg ">
            <p>
              <a
                href="mailto:amitkumar@vedantinnovision.com"
                className="underline hover:text-yellow-400 transition"
              >
                amitkumar@vedantinnovision.com
              </a>
            </p>

            <p className="text-xs opacity-70">Or</p>

            <p>
              <a
                href="tel:+919307267992"
                className="hover:text-yellow-400 transition"
              >
                +91 9307267992
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
