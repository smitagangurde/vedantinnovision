import Image from "next/image";

export default function BrandGrid({ brands }: any) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-purple-900">
      {brands.map((brand: any, index: number) => {

        // ❗ Skip invalid images
        if (!brand?.logo) return null;

        return (
          <div
            key={index}
            className="flex items-center justify-center p-6 border border-purple-900 bg-black"
          >
            <Image
              src={brand.logo}
              alt={brand.name || "brand"}
              width={120}
              height={50}
              className="object-contain"
            />
          </div>
        );
      })}
    </div>
  );
}