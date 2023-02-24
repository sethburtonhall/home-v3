import { ColorSwatchIcon } from '@heroicons/react/outline';

const creativeProjects = [
  {
    id: 1,
    title: 'Hall Pictures',
    url: 'https://www.dropbox.com/s/o7nn7n83e1w8e97/Development_Slate.pdf?dl=0',
    description: "My Creative Producer development slate"
  },
  {
    id: 2,
    title: 'Misc Music',
    url: '',
    description: "A selection of my music"
  },
  {
    id: 3,
    title: 'Holy Smokes!!',
    url: 'https://www.dropbox.com/sh/55s3y33riutfmlc/AACYa1dKcquc8S6s0Pi1fPPwa?dl=0',
    description: "A limited run comic strip from the minds of Seth Hall and Hugh Greene"
  },
  {
    id: 4,
    title: 'Creative Producer IG',
    url: 'https://www.instagram.com/the.creative.producer/?hl=en',
    description: "Genuine stories, practical insight and inspirational victories from the unsung heroes of independent film"
  },
];

export default function CreativeProjects() {
  return (
    <div>
      <div className="mb-6 flex items-center space-x-1">
        <ColorSwatchIcon className="h-7 w-7" />
        <h2>Creative Projects</h2>
      </div>
      <ul className="flex flex-col space-y-4">
        {creativeProjects.map((project) => (
          <li key={project.id}>
            <a
              className="link flex flex-col"
              href={project.url}
              target="_blank"
              rel="noopener"
              title={project.title}
            >
              <span>{project.title}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
