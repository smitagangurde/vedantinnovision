import { processSteps } from "../data/Process";

export default function ProcessSection() {
  return (
    <section
      className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-16 border-t border-purple-900"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          id="process-heading"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-500 text-center mb-12"
        >
          Our comprehensive, expert-driven process involves
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="group rounded-xl border border-purple-900 bg-gradient-to-b from-[#111] to-[#1a1a1a] p-6 sm:p-8 text-center hover:scale-[1.03] transition duration-300"
            >
              {/* Icon */}
              <div className="text-3xl mb-4 text-purple-500">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-purple-400 mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}