import { PaintbrushIcon } from '@heroicons/react/outline';

const creativeProjects = [
  {
    id: 1,
    title: 'This Website!!',
    url: 'https://sethhall.dev',
    description: "This is a description"
  },
  {
    id: 2,
    title: 'Artist Rescue Trust',
    url: 'https://artistrescue.org/',
    description: "This is a description"
  },
  {
    id: 3,
    title: 'Technology Venture Partners',
    url: 'https://tvp.com/',
    description: "This is a description"
  },
  {
    id: 4,
    title: 'Protege',
    url: 'https://protege.dev/',
    description: "This is a description"
  },
  {
    id: 5,
    title: 'Ushahidi',
    url: 'https://ushahidi.com/',
    description: "This is a description"
  },
];

export default function CreativeProjects() {
  return (
    <div>
      <div className="mb-6 flex items-center space-x-1">
        <PaintbrushIcon className="h-7 w-7" />
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
