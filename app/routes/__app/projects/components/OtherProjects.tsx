import { DatabaseIcon } from '@heroicons/react/outline';

const otherProjects = [
  {
    id: 1,
    title: 'This Website!!',
    stack: 'Remix, Tailwind, GithubAPI, DevAPI, Cloudinary, Netlify',
    url: 'https://sethhall.dev',
  },
  {
    id: 2,
    title: 'Artist Rescue Trust',
    stack: 'DatoCMS, Gatsby, GraphQL, Netlify',
    url: 'https://artistrescue.org/',
  },
  {
    id: 3,
    title: 'Technology Venture Partners',
    stack: 'CloudCannon, Jekyll',
    url: 'https://tvp.com/',
  },
  {
    id: 4,
    title: 'Protege',
    stack: 'NextJS, Tailwind, Firebase, Vercel',
    url: 'https://protege.dev/',
  },
  {
    id: 5,
    title: 'Ushahidi',
    stack: 'CraftCMS, Twig, Vanilla HTML/CSS/JS',
    url: 'https://ushahidi.com/',
  },
];

export default function OtherProjects() {
  return (
    <div>
      <div className="mb-6 flex items-center space-x-1">
        <DatabaseIcon className="h-7 w-7" />
        <h2>Other Projects</h2>
      </div>
      <ul className="flex flex-col space-y-4">
        {otherProjects.map((project) => (
          <li key={project.id}>
            <a
              className="link flex flex-col"
              href={project.url}
              target="_blank"
              rel="noopener"
              title="Artist Rescue Trust"
            >
              <span>{project.title}</span>
              <span className="pl-2 text-sm text-gray-500 dark:text-gray-400">
                {project.stack}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
