import React from "react";

const codingSkills = {
  "Languages/Tools": [
    "Python",
    "JavaScript",
    "TensorFlow/Keras",
    "Pandas",
    "Matplotlib",
  ],
  Expertise: [
    "Data visualization",
    "Data cleanup",
    "Data analysis",
    "Supervised machine learning",
    "Unsupervised machine learning",
  ],
  "Other Tools": ["Advanced Excel", "XRM Toolbox"],
};

const dynamicsModules = [
  "Power Pages (Portals)",
  "Customer Service",
  "Sales",
  "Field Service",
  "Marketing",
  "Power BI",
  "Power Platform",
  "Project Operations",
];

const certifications = [
  "Microsoft Power Platform Solution Architect Expert",
  "Microsoft Power Platform Functional Consultant",
  "Teams Meeting and Meeting Rooms Technical Assessments",
  "Microsoft Power Platform Fundamentals",
  "Microsoft Power Platform App Maker",
  "Microsoft Dynamics 365 Functional Consultant (Sales)",
];

export default function TechnicalSkills() {
  return (
    <section id="technical-skills" className="space-y-8 scroll-mt-24">
      <h2 className="text-lg font-semibold text-emerald-400">Technical Skills</h2>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-400">
          Coding and Data Science
        </h3>
        <div className="space-y-4 text-gray-300">
          {Object.entries(codingSkills).map(([label, items]) => (
            <div key={label}>
              <h4 className="mb-1 text-xs font-medium text-emerald-400/80">
                {label}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded bg-gray-800 px-2 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-400">
          Microsoft Dynamics Software
        </h3>
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-emerald-400/80">Modules</h4>
          <ul className="flex flex-wrap gap-2">
            {dynamicsModules.map((m) => (
              <li
                key={m}
                className="rounded bg-gray-800 px-2 py-1 text-sm text-gray-300"
              >
                {m}
              </li>
            ))}
          </ul>
          <h4 className="mt-3 text-xs font-medium text-emerald-400/80">
            Certifications
          </h4>
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-300">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
