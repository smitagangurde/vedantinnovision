// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function BrandIdentitySection() {
//   return (
//     <section
//       aria-labelledby="brand-identity-heading"
//       className="w-full bg-white text-black py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
//         {/* ===== LEFT SIDE (IMAGE + SHAPES) ===== */}
//         <div className="relative flex justify-center">
          
//           {/* Background Circle */}
//           <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-blue-100 rounded-full -z-10"></div>

//           {/* Main Image */}
//           <div className="relative w-full max-w-md aspect-[4/3]">
//             <Image
//               src="/branding-kit.png" // replace with your image
//               alt="Brand identity design mockups including brochure, business card, and notebook"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>

//           {/* Decorative Circle */}
//           <div className="absolute bottom-0 left-10 w-28 h-28 bg-cyan-500 rounded-full -z-10"></div>
//         </div>

//         {/* ===== RIGHT SIDE CONTENT ===== */}
//         <div className="max-w-xl">
          
//           <h1
//             id="brand-identity-heading"
//             className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-700 leading-tight mb-6"
//           >
//             Professional Brand <br /> Identity Design Services
//           </h1>

//           <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
//             We don’t just design logos; we build visual legacies. As a premier
//             <strong> brand identity design company</strong> with over{" "}
//             <strong>17 years of excellence</strong> and{" "}
//             <strong>10,000+ projects delivered</strong>, we help businesses cut
//             through the noise with cohesive and impactful design.
//           </p>

//           <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
//             We transform your vision into a powerful brand identity that
//             commands attention and builds trust instantly.
//           </p>

//           {/* CTA */}
//           <Link
//             href="/contact"
//             className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>

//       {/* ===== LEFT VERTICAL TEXT ===== */}
//       <div className="hidden lg:flex flex-col gap-6 absolute left-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 tracking-wider">
//         <span className="rotate-[-90deg] origin-left">Strategy</span>
//         <span className="rotate-[-90deg] origin-left">Communication</span>
//         <span className="rotate-[-90deg] origin-left">Design</span>
//       </div>

//       {/* ===== RIGHT CONTACT TAB ===== */}
//       <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
//         <Link
//           href="/contact"
//           className="bg-cyan-600 text-white px-3 py-4 rounded-l-md rotate-[-90deg] origin-right"
//         >
//           CONTACT
//         </Link>
//       </div>
//     </section>
//   );
// }