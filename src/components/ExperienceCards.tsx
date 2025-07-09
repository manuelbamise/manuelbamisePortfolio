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
      <DialogTrigger asChild>
        <Button variant="outline">see more</Button>
      </DialogTrigger>

      <DialogContent className="">
        <DialogHeader className="outline outline-black mb-auto">
          <DialogDescription>Jan 22 2024 - present</DialogDescription>
          <DialogTitle>@Bimpe</DialogTitle>
        </DialogHeader>
        <div className="outline">
          <ul className="text-lg outline outline-indigo-800">
            <li className="mb-4"> Architected and implemented scalable microservices using Node.js </li>

            <li className="mb-4">Mentored junior developers and conducted technical interviews </li>

            <li className="mb-4">Collaborated with product managers to define technical specifications </li> </ul>
        </div>

      </DialogContent>
    </Dialog>
  )
}

export default ExperienceCards;
