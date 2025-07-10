import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectName')({
  component: RouteComponent,
})

function RouteComponent() {





  const { projectName } = Route.useParams()
  return <>


    <div>


      {projectName}
    </div>


  </>
}
