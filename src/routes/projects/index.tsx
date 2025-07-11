import { createFileRoute, Link } from '@tanstack/react-router'
import Projects from '../../lib/json/projects.json'
import { Card, CardContent, CardHeader } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import img from '../../assets/img/img001.jpeg'
import { ArrowRight } from 'lucide-react'
import Footer from '../../components/sections/FooterSection'




export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>

      <div className='h-[85vh] flex-col-reverse items-center  justify-between outline outline-indigo-800 '>


        <div className="flex gap-10 flex-wrap justify-center items-center outline mx-20">

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
                <Button className="mt-4 text-lg p-6" variant="secondary" asChild>
                  <Link
                    to='/projects/$projectName'
                    // className='w-full'
                    params={
                      { projectName: project.projectName }
                    }
                  >view project <span><ArrowRight /> </span>
                  </Link>
                </Button>
              </CardContent>
            </Card>)

          ))}

        </div>

        <div className='mx-20 flex justify-center items-center'>
          <Footer />

        </div>

      </div>
    </>
  )
}
