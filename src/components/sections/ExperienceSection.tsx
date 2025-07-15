import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import ExperienceCards from "../AdditionalComponents/ExperienceCards";
import experiences from "../../lib/json/experiences.json"
import { motion } from "framer-motion";

const ExperienceSection = () => {

  return (<>
    <motion.div

      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center space-y-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          Work Experience
        </motion.div>
        <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          Here are the places i've worked at.
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 flex-wrap  mt-4">

        {experiences && experiences.map((experience) => (
          <Card key={experience.key} className="w-full lg:w-[25%] md:min-h-[25vh] bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:border-white/30 dark:text-white dark:hover:shadow-white">
            <CardHeader className="flex flex-col">
              <CardTitle> {experience.jobDuration} </CardTitle>
              <div>{experience.jobTitle}</div>
              <div className="text-2xl font-bold">@{experience.companyName}</div>
              <CardDescription>{experience.shortDescription}</CardDescription>
            </CardHeader>

            <CardContent>
              <CardAction>

                <ExperienceCards info={{
                  duration: experience.jobDuration,
                  jobTitle: experience.jobTitle,
                  companyLocation: experience.companyLocation,
                  companyName: experience.companyName,
                  jobDone: experience.tasksPerformed
                }} />

              </CardAction>
            </CardContent>
          </Card>

        ))}

      </div>
    </motion.div >

  </>)
}

export default ExperienceSection;
