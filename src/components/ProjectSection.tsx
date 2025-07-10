import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import img from "../assets/img/img001.jpeg";
import { ArrowRight } from "lucide-react";

const ProjectSection = () => {

  return (<>
    <div className="flex-col items-center justify-center ">
      <div className="flex-col items-center justify-around text-center ">
        <div className="text-3xl">projects</div>
        <div>here's what i've been working on</div>
      </div>
      <div className="flex gap-10 flex-wrap mt-4 justify-center items-center ">

        <Card>

          <CardHeader>
            <div className="w-[7vw]">
              <img src={img} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Lopejnfnan</div>
            <div className="text-gray-500 text-sm">lorem ipsum djas fhdga hghs gebfh a dfjnf eeghbeg  fhsf shf sfhg efjs f sf</div>
            <Button className="mt-4 text-lg p-6" variant="secondary">view project <ArrowRight /> </Button>
          </CardContent>
        </Card>


        <Card>

          <CardHeader>
            <div className="w-[7vw]">
              <img src={img} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Lopejnfnan</div>
            <div className="text-gray-500 text-sm">lorem ipsum djas fhdga hghs gebfh a dfjnf eeghbeg  fhsf shf sfhg efjs f sf</div>
            <Button className="mt-4 text-lg p-6" variant="secondary">view project <ArrowRight /> </Button>
          </CardContent>
        </Card>

      </div>
    </div>



  </>)
}


export default ProjectSection;
