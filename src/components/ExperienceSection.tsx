import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import ExperienceCards from "./ExperienceCards";


const ExperienceSection = () => {
  return (<>
    <div className="flex-col items-center justify-center outline outline-black">
      <div className="flex items-center justify-center">
        <div className="text-3xl">experience </div>
        <div>here are the places i've worked at</div>
      </div>
      <div>

        <Card className=" w-[15vw]">
          <CardHeader>
            <CardTitle>  jan 2022 - present</CardTitle>
            <div className="text-2xl font-bold">@Bimpe</div>
            <CardDescription>Leading backend development for cloud-based solution</CardDescription>
          </CardHeader>

          <CardContent>
            <CardAction>

              <ExperienceCards />

            </CardAction>
          </CardContent>
        </Card>
      </div>
    </div>


  </>)
}

export default ExperienceSection;
