import { createFileRoute, Link } from '@tanstack/react-router'
import Projects from '../../lib/json/projects.json'
import { Card, CardContent, CardHeader } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import img from '../../assets/img/img001.jpeg'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'



export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>

      <motion.div className=" flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}


      >
        <div className="flex items-center justify-around text-center mb-13">
          <div className='text-3xl font-bold'>Here's what i've been up to</div>
        </div>
        <main className="flex-grow ">
          <div className="flex gap-10 flex-wrap justify-center items-center mx-20">
            {Projects && Projects.map((project) => (
              <Card key={project.key} className=' bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:border-white/30 dark:text-white '>
                <CardHeader>
                  <div className="w-[7vw]">
                    <img src={img} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{project.projectName}</div>
                  <div className="text-gray-500 text-sm">{project.shortText}</div>
                  <Button className="mt-4 text-lg p-6 hover:bg-gray-700/30 dark:border hover:dark:border-white" variant="secondary" asChild>
                    <Link
                      to='/projects/$projectName'
                      params={{ projectName: project.projectName }}
                    >
                      view project <ArrowRight />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

      </motion.div>   </>
  )
}
