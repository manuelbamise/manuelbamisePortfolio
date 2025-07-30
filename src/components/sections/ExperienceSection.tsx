import { LinkIcon } from "lucide-react";
import { Badge } from "../ui/badge";

const experiences = [
  {
    date: 'Jul 2024 - Present',
    role: 'Co-Founder',
    company: 'diepen.io',
    textColor: 'text-yellow-800',
    icon: <LinkIcon className="w-4 h-4 mr-1" />,
    bgColor: 'bg-yellow-300/60'
  },
]

const ExperienceSection = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
      <ul className="space-y-4">
        {experiences.map((exp, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-gray-600 dark:text-gray-400">{exp.date}</span>
            <span className="flex items-center gap-2">{exp.role} at
              <Badge className={`${exp.bgColor} rounded px-3 py-2`}>
                <span className={`flex items-center font-semibold ${exp.textColor}`}>
                  {exp.icon} {exp.company}
                </span>
              </Badge>
            </span>
          </li>
        ))}
      </ul>

    </>

  )
}


export default ExperienceSection;
