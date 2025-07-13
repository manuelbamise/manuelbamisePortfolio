import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import ExperienceCards from "../AdditionalComponents/ExperienceCards";
import experiences from "../../lib/json/experiences.json"

const ExperienceSection = () => {
  return (<>
    <div className="flex-col items-center justify-center ">
      <div className="flex-col items-center justify-around text-center ">
        <div className="text-3xl">experience </div>
        <div>here are the places i've worked at</div>
      </div>
      <div className="flex items-center justify-center gap-10 flex-wrap mt-4">

        {experiences && experiences.map((experience) => (
          <Card key={experience.key} className=" w-[15%] min-h-[25vh] bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:border-white/30 dark:text-white dark:hover:shadow-white">
            <CardHeader className="flex flex-col h-[15vh]">
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
    </div>


  </>)
}

export default ExperienceSection;
