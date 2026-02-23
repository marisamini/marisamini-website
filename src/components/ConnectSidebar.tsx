"use client";

import React from "react";

// Replace with your LinkedIn profile URL (e.g. https://linkedin.com/in/yourprofile)
const LINKEDIN_URL = "https://linkedin.com/in/marisamini";

// Replace with your GitHub profile or this site's repo (e.g. https://github.com/marisamini/marisamini-website)
const GITHUB_URL = "https://github.com/marisamini/marisamini-website";

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
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 active:opacity-90"
        >
          <LinkedInIcon className="h-4 w-4" />
          Connect on LinkedIn
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-gray-600 px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400 active:bg-gray-800"
        >
          <GitHubIcon className="h-4 w-4" />
          See how this site was built
        </a>
        {CONTACT_EMAIL && (
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="ml-2 inline-flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
          >
            Email me
          </a>
        )}
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

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
