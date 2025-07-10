
import { createFileRoute, Link } from '@tanstack/react-router'
import projects from '../../lib/json/projects.json'
import { Button } from '../../components/ui/button';
import { ArrowBigLeft } from 'lucide-react';

export const Route = createFileRoute('/projects/$projectName')({
  loader: ({ params }) => {
    const project = projects.find(
      (p) => p.projectName.toLowerCase() === params.projectName.toLowerCase()
    );

    if (!project) {
      throw new Error('Project not found');
    }

    return project;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const project = Route.useLoaderData();

  return (
    <>
      <div className=''>

        <Button variant="secondary" size="lg" asChild>

          <Link to='/projects'> <ArrowBigLeft /> </Link>

        </Button>
      </div>
      <div className="p-6 space-y-4 mt-13">
        <h1 className="text-3xl font-bold">{project.projectName}</h1>
        <p className="text-gray-700">{project.longerText}</p>
      </div>

    </>
  );
}

