import { createFileRoute } from '@tanstack/react-router'
import ComingSoonComponent from '../components/ComingSoon'


export const Route = createFileRoute('/blog')({
  component: ComingSoonComponent,
})
//
// function RouteComponent() {
//   return <div>Hello "/blog"!</div>
// }
