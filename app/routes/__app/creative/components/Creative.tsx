import { ColorSwatchIcon } from '@heroicons/react/outline';

const creativeProjects = [
  {
    id: 1,
    title: 'Hall Pictures',
    url: '',
    description: "My Creative Producer Development Slate"
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
    url: '',
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
      <p>As a multi-hyphenate creative I have been involved in many different projects. Below are a few of these.</p>
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
