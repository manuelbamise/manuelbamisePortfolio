import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const ExperienceCards = () => {

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">see more</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] h-[50vh]">
          <DialogHeader>
            <DialogDescription>Jan 22 2024 - present</DialogDescription>
            <DialogTitle>@Bimpe</DialogTitle>
          </DialogHeader>
          <div className="outline outline-black">
            <ul className="text-lg flex-col justify-between items-center"> <li> Architected and implemented scalable microservices using Node.js </li>

              <li>Mentored junior developers and conducted technical interviews </li>

              <li>Collaborated with product managers to define technical specifications </li> </ul>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default ExperienceCards;
