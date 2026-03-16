// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function Sidebar() {
//   return (
//     <aside className="fixed left-0 top-0 h-screen w-20 bg-white border-r flex flex-col items-center justify-between py-6 z-50">

//       {/* Logo */}
//       <Link href="/" className="bg-blue-700 w-full flex justify-center py-4">
//         <Image
//           src="/logo-icon.png"   // place logo in public folder
//           alt="Logo"
//           width={40}
//           height={40}
//         />
//       </Link>

//       {/* Vertical Menu */}
//       <div className="flex flex-col items-center gap-20 text-gray-500 text-sm tracking-widest">

//         <span className="rotate-[-90deg] whitespace-nowrap">
//           Strategy
//         </span>

//         <span className="rotate-[-90deg] whitespace-nowrap">
//           Communication
//         </span>

//         <span className="rotate-[-90deg] whitespace-nowrap">
//           Design
//         </span>

//       </div>

//       {/* Scroll Top Button */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="text-xl text-gray-600 hover:text-black"
//       >
//         ↑
//       </button>
//     </aside>
//   );
// }