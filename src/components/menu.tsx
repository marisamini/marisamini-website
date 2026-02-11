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

interface MenuItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isExternal?: boolean;
}

interface MenuProps {
  activeItem?: string;
  handleClick?: (item: string) => void;
}

const menuItems: MenuItem[] = [
  { href: "#bio", label: "Bio", icon: BioIcon },
  { href: "#experiences", label: "Experiences", icon: ExperienceIcon },
  { href: "#technical-skills", label: "Technical Skills", icon: SkillsIcon },
  { href: "#visitor-stats", label: "Site stats", icon: ChartIcon },
];

export default function Menu({
  activeItem = "",
  handleClick = () => {},
}: MenuProps) {
  return (
    <nav className="flex flex-col gap-1">
      {menuItems.map((item) => {
        const isActive = activeItem === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => !item.isExternal && handleClick(item.href)}
            target={item.isExternal ? "_blank" : "_self"}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-3 rounded px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-emerald-500/20 text-emerald-400"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
            }`}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
