import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0a0a0a] text-gray-200">
      <h1 className="text-2xl font-semibold">404</h1>
      <p>This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500"
      >
        Back home
      </Link>
    </div>
  );
}
