import { createFileRoute } from '@tanstack/react-router'
import Projects from '../lib/json/projects.json'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>


    <div className="flex gap-10 flex-wrap mt-4 justify-center items-center ">

      {Projects && Projects.map((project) => (
        <div key={project.key}>
          <div>{project.projectName}</div>
          <div>{project.shortText}</div>
        </div>
      ))}

    </div>

  </>
}
