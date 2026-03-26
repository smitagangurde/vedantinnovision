import { steps, projects, stats } from "../data/BIDiscovery";

export default function BIDiscoverySection() {
  return (
    <section
      aria-labelledby="work-heading"
      className="w-full bg-[var(--brand-black)] text-white pt-12 pb-6 md:pt-14 md:pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <header className="max-w-5xl mb-10">
          <h2
            id="work-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--brand-purple)]"
          >
            How Our Brand Identity Design Company Works for You
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            Our approach blends creativity with strategy.
          </p>
        </header>

        {/* STEPS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <article
                key={i}
                className="border border-white/10 rounded-xl p-6 hover:border-[var(--brand-purple)] transition duration-300"
              >
                <Icon className="w-8 h-8 text-[var(--brand-purple)] mb-4" />

                <h3 className="text-lg font-semibold text-[var(--brand-purple)] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </article>
            );
          })}
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-lg h-28 flex items-center justify-center text-sm text-white/80 hover:bg-white/10 transition"
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
