import { createFileRoute } from '@tanstack/react-router'
import ComingSoonComponent from '../components/AdditionalComponents/ComingSoon'


export const Route = createFileRoute('/blog')({
  component: ComingSoonComponent,
})

