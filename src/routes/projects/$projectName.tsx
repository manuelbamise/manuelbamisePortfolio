
import { createFileRoute, Link } from '@tanstack/react-router'
import projects from '../../lib/json/projects.json'
import { Button } from '../../components/ui/button';
import { ArrowBigLeft } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

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
      <div className='flex flex-col'>

        <div className=' flex justify-center items-center'>

          <Button variant="secondary" size="lg" asChild>

            <Link to='/projects'> <ArrowBigLeft />Back to /projects </Link>

          </Button>
        </div>
        <div className="p-6 space-y-4 mt-13 mx-20">
          <h1 className="text-3xl font-bold">{project.projectName}</h1>
          <p>{project.shortText}</p>

          <div className='rounded-xl shadow-2xl border p-6'>
            <div>
              <div className='font-bold'>Description</div>
              <div>{project.longerText}</div>
            </div>

            <div className='mt-5'>
              <div className='font-bold'>Technologies</div>
              <div className=' w-[50vw] mt-2'>{project.techStack && project.techStack.map((stack) => (
                <Badge key={stack} className='mr-4 p-2 text-white bg-black dark:text-black dark:bg-white rounded-xl' variant="secondary" >{stack}</Badge>
              ))}</div>
            </div>
          </div>



        </div>

      </div>

    </>
  );
}

