"use client";
import Link from "next/link";
import { use } from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link href="/" className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
}
