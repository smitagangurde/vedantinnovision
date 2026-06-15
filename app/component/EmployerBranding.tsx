type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function EmployerBrandingCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <div className="bg-white/5 border border-purple-900 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300">
      <div className="mb-4">
        <span
          style={{ color: "var(--color-brand-primary)" }}
          className="text-4xl"
        >
          {icon}
        </span>
      </div>

      <h3
        style={{
          color: "var(--color-brand-primary)",
          fontSize: "var(--text-heading-md)",
          fontWeight: "var(--font-weight-heading)",
        }}
        className="mb-2"
      >
        {title}
      </h3>

      <p
        style={{
          color: "var(--color-text-body)",
          fontSize: "var(--text-body-sm)",
        }}
        className="leading-relaxed"
      >
        {description}
      </p>
    </div>
  );
}
