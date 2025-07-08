import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { DialogHeader } from "./ui/dialog";
import ExperienceCards from "./ExperienceCards";


const ExperienceSection = () => {
  return (<>
    <div className="flex-col items-center justify-center outline outline-black">
      <div className="flex items-center justify-center">
        <div className="text-3xl">experience </div>
        <div>here are the places i've worked at</div>
      </div>
      <div>

        <ExperienceCards />
        {/* <Dialog> */}
        {/*   <Card className=" w-[15vw]"> */}
        {/*     <CardHeader> */}
        {/*       <CardTitle>  jan 2022 - present</CardTitle> */}
        {/*       <div className="text-2xl font-bold">@Bimpe</div> */}
        {/*       <CardDescription>Leading backend development for cloud-based solution</CardDescription> */}
        {/*     </CardHeader> */}
        {/**/}
        {/*     <CardContent> */}
        {/*       <CardAction> */}
        {/**/}
        {/*         <DialogTrigger asChild> */}
        {/*           <Button variant="link">see more</Button> */}
        {/*         </DialogTrigger> */}
        {/**/}
        {/*         <DialogContent> */}
        {/*           <DialogHeader> */}
        {/*             <DialogTitle>Are you absolutely sure?</DialogTitle> */}
        {/*             <DialogDescription> */}
        {/*               This action cannot be undone. This will permanently delete your account */}
        {/*               and remove your data from our servers. */}
        {/*             </DialogDescription> */}
        {/*           </DialogHeader> */}
        {/*         </DialogContent> */}
        {/*       </CardAction> */}
        {/*     </CardContent> */}
        {/*   </Card> */}
        {/* </Dialog> */}
      </div>
    </div>


  </>)
}

export default ExperienceSection;
