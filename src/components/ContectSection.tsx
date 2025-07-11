import { Button } from "./ui/button"
import { Github, Mail, PlaneTakeoff, Twitter, Youtube } from "lucide-react"


const ContectSection = () => {
  return (
    <>
      <div className="flex-col items-center justify-center ">
        <div className="flex-col items-center justify-around text-center ">
          <div className="text-3xl">contact </div>
          <div>here's how you can reach out to me</div>
        </div>
        <div className="flex items-center justify-center gap-10 flex-wrap mt-4">
          <Button asChild>
            <a href="#"><Mail /> </a>
          </Button>

          <Button asChild>
            <a href="#"><Github /> </a>
          </Button>

          <Button asChild>
            <a href="#"><Twitter /> </a>
          </Button>


          <Button asChild>
            <a href="#"><Youtube /> </a>
          </Button>

          <Button asChild>
            <a href="#"><PlaneTakeoff /> </a>
          </Button>

        </div>
      </div>


    </>
  )
}



export default ContectSection
