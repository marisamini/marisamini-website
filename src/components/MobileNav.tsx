"use client";

import React from "react";
import {
  BioIcon,
  ExperienceIcon,
  SkillsIcon,
} from "@/assets/icons";

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

const items = [
  { href: "#bio", label: "About", icon: BioIcon },
  { href: "#experiences", label: "Experience", icon: ExperienceIcon },
  { href: "#technical-skills", label: "Skills", icon: SkillsIcon },
  { href: "#visitor-stats", label: "Stats", icon: ChartIcon },
];

export default function MobileNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-gray-800 bg-[#0a0a0a]/95 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur-sm md:hidden"
      aria-label="Mobile navigation"
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 rounded-lg px-3 py-2 text-gray-400 transition-colors active:bg-emerald-500/20 active:text-emerald-400"
        >
          <item.icon className="h-6 w-6 shrink-0" />
          <span className="text-xs font-medium">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
