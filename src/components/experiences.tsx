import React from "react";

// Add or edit entries below. Copy a block and fill in period, role, company, description, technologies.
const experiences = [
  {
    period: "2025",
    role: "Your new project or role",
    company: "Company or client name",
    description: "Brief description of what you did and the impact.",
    technologies: ["Dynamics 365", "Power Platform"],
  },
  {
    period: "2025",
    role: "Another project or role",
    company: "Company or client name",
    description: "Brief description.",
    technologies: ["List", "technologies", "here"],
  },
  {
    period: "2024",
    role: "Sales Software Implementation",
    company: "Healthcare Company",
    description:
      "Designed and implemented a tailored sales solution to streamline operations and improve user adoption, leading to enhanced business processes and efficiency.",
    technologies: ["Dynamics 365", "Power Platform", "Sales Hub"],
  },
  {
    period: "2024",
    role: "Power Pages (Portal) Implementation",
    company: "Healthcare Company",
    description:
      "Developed and deployed a custom portal to enhance interactions and improve accessibility for healthcare services.",
    technologies: ["Power Pages", "Power Platform", "Azure", "JavaScript", "HTML"],
  },
  {
    period: "2024",
    role: "Project Operations Implementation",
    company: "Healthcare Company",
    description:
      "Co-designed project operations tools to optimize resource management and streamline project tracking.",
    technologies: ["Project Operations", "Dynamics 365"],
  },
  {
    period: "2024",
    role: "Sales Software Implementation",
    company: "Food & Beverage Company",
    description:
      "Implemented a sales software solution to enhance customer relationship management and provide actionable insights for the sales team.",
    technologies: ["Dynamics 365", "Power BI", "Sales Hub"],
  },
  {
    period: "2023",
    role: "Customer Service Implementation",
    company: "Bio-Chemical Company",
    description:
      "Built a custom CRM solution to enhance customer service workflows and improve responsiveness to client inquiries.",
    technologies: ["Customer Service Hub", "Power Apps"],
  },
  {
    period: "2023",
    role: "Power Pages (Portal) Implementation",
    company: "Government Project",
    description:
      "Built a secure and user-friendly portal for government operations, focusing on accessibility and efficiency for public services.",
    technologies: ["Power Pages", "Azure AD", "Power Platform", "JavaScript", "HTML"],
  },
];

export default function ListOfExperiences() {
  return (
    <section id="experiences" className="space-y-6 scroll-mt-24">
      <h2 className="text-lg font-semibold text-emerald-400">Experience</h2>
      <ol className="space-y-8 border-l-2 border-gray-700 pl-6">
        {experiences.map((exp, index) => (
          <li key={index} className="relative space-y-1">
            <span className="absolute -left-[29px] rounded-full bg-emerald-500/80 h-3 w-3 border-2 border-[#0a0a0a]" />
            <p className="text-sm font-medium text-emerald-400/90">{exp.period}</p>
            <h3 className="text-base font-semibold text-gray-100">
              {exp.role}
            </h3>
            <p className="text-sm text-gray-400">{exp.company}</p>
            <p className="text-gray-300">{exp.description}</p>
            {exp.technologies && exp.technologies.length > 0 && (
              <ul className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="rounded bg-gray-800 px-2 py-0.5 text-xs text-gray-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
