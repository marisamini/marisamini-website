"use client";

import React from "react";

// Replace with your LinkedIn profile URL (e.g. https://linkedin.com/in/yourprofile)
const LINKEDIN_URL = "https://linkedin.com/in/marisamini";

// Optional: add your email to show an "Email me" link (e.g. "marisa@example.com")
const CONTACT_EMAIL = "";

const FOCUS_AREAS = [
  "CRM implementations",
  "Power Platform",
  "Data & automation",
];

const SELECTED_OUTCOMES = [
  "100% project success from discovery through go-live",
  "Design, delivery, training, and data migrations on every engagement",
  "Strong project management and stakeholder collaboration throughout",
];

export default function ConnectSidebar() {
  return (
    <div className="mt-8 space-y-6 border-t border-gray-700/50 pt-6">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
          Selected outcomes
        </p>
        <ul className="space-y-2 text-sm text-gray-300">
          {SELECTED_OUTCOMES.map((outcome) => (
            <li key={outcome} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" />
              {outcome}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
          Focus
        </p>
        <ul className="space-y-1 text-sm text-gray-400">
          {FOCUS_AREAS.map((area) => (
            <li key={area}>• {area}</li>
          ))}
        </ul>
      </div>
      <div>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <LinkedInIcon className="h-4 w-4" />
          Connect on LinkedIn
        </a>
        {CONTACT_EMAIL && (
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="ml-2 inline-flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
          >
            Email me
          </a>
        )}
        <p className="mt-2 text-xs text-gray-500">
          Open to consulting, product management, AI/technical, and sports-related opportunities
        </p>
      </div>
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
