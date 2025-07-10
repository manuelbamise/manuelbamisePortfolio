import { createFileRoute } from '@tanstack/react-router'
import ComingSoonComponent from '../components/ComingSoon'

export const Route = createFileRoute('/video-content')({
  component: ComingSoonComponent,
})

