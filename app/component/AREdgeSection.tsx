import { AREdge, stat } from "../data/AREdge";

export default function AREdgeSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="w-full bg-[var(--brand-black)] text-white pt-12 pb-10 md:pt-14 md:pb-12 border-b border-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="process-heading"
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--brand-purple)]"
          >
            The Velocitta Edge – Our Proven Process
          </h2>

          <p className="text-sm md:text-base text-white/70 mt-3">
            A Structured, Insight-Led Reporting Workflow
          </p>

          <p className="text-sm text-white/60 mt-2">
            We follow a meticulous, step-by-step approach to ensure clarity, accuracy, and impact:
          </p>
        </header>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {AREdge.map((step, index) => (
            <article
              key={index}
              className="bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition border border-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4 text-[var(--brand-purple)]">
                {step.icon}
              </div>

              <h3 className="text-sm md:text-base font-semibold text-[var(--brand-purple)] mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {step.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Highlight Text */}
        <div className="text-center mt-10">
          <p className="inline-block bg-gradient-to-r  text-white text-sm px-4 py-2 rounded">
            From analytical insights to immersive digital experiences, we go beyond design to deliver powerful stakeholder communication tools.
          </p>
        </div>
      </div>
    </section>
  );
}