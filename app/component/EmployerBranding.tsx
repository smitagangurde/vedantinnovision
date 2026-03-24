import Image from "next/image";

type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function EmployerBrandingCard({ title, description, icon }: Props) {
  return (
    <div className="bg-white/5 border border-purple-900 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300">
      
      <div className="mb-4">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}