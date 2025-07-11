import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

const ExperienceCards = ({ info }) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">see more</Button>
      </DialogTrigger>

      <DialogContent >
        <DialogHeader className="mb-auto">
          <DialogDescription>{info.duration}</DialogDescription>
          <div>{info.jobTitle}</div>
          <DialogTitle>{info.companyName}</DialogTitle>
          <div>{info.companyLocation}</div>
        </DialogHeader>

        <ul className="text-lg ">
          {info.jobDone}
        </ul>


      </DialogContent>
    </Dialog>
  )
}

export default ExperienceCards;
