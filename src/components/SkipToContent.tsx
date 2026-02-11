"use client";

import React from "react";

export default function SkipToContent() {
  return (
    <a
      href="#bio"
      className="fixed left-4 top-4 z-[100] -translate-y-16 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
    >
      Skip to content
    </a>
  );
}
