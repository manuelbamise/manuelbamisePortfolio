import { LinkIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import experiences from '@/lib/json/experiences.json'



const ExperienceSection = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
      <ul className="space-y-4">
        {experiences.map((exp, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-gray-600 dark:text-gray-400">{exp.jobDuration}</span>
            <span className="flex items-center gap-2">{exp.jobTitle} at
              <Badge className={`${exp.bgColor} rounded-lg px-3 py-2`} asChild>
                <a href={exp.link} target="_blank">

                  <span className={`flex items-center font-semibold dark:text-black ${exp.textColor}`}>
                    <LinkIcon /> {exp.companyName}
                  </span>

                </a>
              </Badge>
            </span>
          </li>
        ))}
      </ul>

    </>

  )
}


export default ExperienceSection;
