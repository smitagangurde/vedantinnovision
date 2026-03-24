export default function EmployerBrandingStats({ stats }: any) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
      {stats.map((item: any, index: number) => (
        <div key={index} className="relative">
          
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700">
            {item.value}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {item.label}
          </p>

          {/* Divider */}
          {index !== stats.length - 1 && (
            <div className="hidden sm:block absolute right-[-30px] top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
}