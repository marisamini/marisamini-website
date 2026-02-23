"use client";

import React from "react";
import {
  BioIcon,
  ExperienceIcon,
  SkillsIcon,
} from "@/assets/icons";

const items = [
  { href: "#bio", label: "About", icon: BioIcon },
  { href: "#experiences", label: "Experience", icon: ExperienceIcon },
  { href: "#technical-skills", label: "Skills", icon: SkillsIcon },
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
