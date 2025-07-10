import { createFileRoute } from '@tanstack/react-router'
import Projects from '../../lib/json/projects.json'
import { Card, CardContent, CardHeader } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import img from '../../assets/img/img001.jpeg'
import { ArrowRight } from 'lucide-react'



export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>


      <div className="flex gap-10 flex-wrap mt-4 justify-center items-center ">

        {Projects && Projects.map((project) => (


          (<Card key={project.key}>
            <CardHeader>
              <div className="w-[7vw]">
                <img src={img} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{project.projectName}</div>
              <div className="text-gray-500 text-sm">{project.shortText}</div>
              <Button className="mt-4 text-lg p-6" variant="secondary">view project <ArrowRight /> </Button>
            </CardContent>
          </Card>)

          //
          // <div key={project.key}>
          //   <div>{project.projectName}</div>
          //   <div>{project.shortText}</div>
          // </div>
        ))}

      </div>

    </>
  )
}
