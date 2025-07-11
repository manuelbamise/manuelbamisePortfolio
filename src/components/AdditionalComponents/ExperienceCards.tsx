import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

const ExperienceCards = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">see more</Button>
      </DialogTrigger>

      <DialogContent >
        <DialogHeader className="mb-auto">
          <DialogDescription>Jan 22 2024 - present</DialogDescription>
          <DialogTitle>@Bimpe</DialogTitle>
        </DialogHeader>

        <ul className="text-lg ">
          <li className="mb-4"> Architected and implemented scalable microservices using Node.js </li>

          <li className="mb-4">Mentored junior developers and conducted technical interviews </li>

          <li className="mb-4">Collaborated with product managers to define technical specifications </li> </ul>


      </DialogContent>
    </Dialog>
  )
}

export default ExperienceCards;
