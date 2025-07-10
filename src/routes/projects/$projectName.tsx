import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectName')({
  component: RouteComponent,
})

function RouteComponent() {

  const route = useRouter()
  const location = route.state.location.pathname


  console.log(location)


  const { projectName } = Route.useParams()
  return <div>Hello "/projects/${projectName}"!</div>
}
