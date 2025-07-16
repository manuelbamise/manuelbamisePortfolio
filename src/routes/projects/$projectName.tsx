
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import projects from '../../lib/json/projects.json';
import { Button } from '../../components/ui/button';
import { ArrowBigLeft } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/projects/$projectName')({
  loader: ({ params }) => {
    const project = projects.find(
      (p) => p.projectName.toLowerCase() === params.projectName.toLowerCase()
    );

    if (!project) {
      throw notFound();
    }

    return project ?? null;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const project = Route.useLoaderData();

  return (
    <motion.div className="flex flex-col px-4 md:px-20 py-8 gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}

    >
      {/* Back Button */}
      <div className="flex justify-start">
        <motion.div
          initial={{ scaleX: 0, originX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="secondary" size="lg" asChild>
            <Link to="/projects" from='/'            >
              <ArrowBigLeft className="mr-2" />
              Back to /projects
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Project Info */}
      <motion.div className="space-y-4"

        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}

      >
        <h1 className="text-2xl md:text-3xl font-bold">{project.projectName}</h1>
        <p className="text-gray-700 dark:text-gray-300">{project.shortText}</p>

        {/* Details Box */}
        <div className="rounded-xl shadow-2xl border p-6 dark:border-white/20">
          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-sm md:text-base leading-relaxed">{project.longerText}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Technologies</h2>
            <div className="w-full lg:w-1/2 flex flex-wrap gap-2">
              {project.techStack?.map((stack) => (
                <Badge
                  key={stack}
                  className="px-3 py-1 text-sm text-white bg-black dark:text-black dark:bg-white rounded-xl"
                  variant="secondary"
                >
                  {stack}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

