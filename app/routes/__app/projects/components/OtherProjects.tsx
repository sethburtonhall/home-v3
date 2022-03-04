import { DatabaseIcon } from '@heroicons/react/outline';

export default function OtherProjects() {
  return (
    <div>
      <div className="mb-6 flex items-center space-x-1">
        <DatabaseIcon className="h-7 w-7" />
        <h2>Other Projects</h2>
      </div>
      <ul className="flex flex-col space-y-4">
        <li>
          <div className="link flex flex-col">
            <span>This Website!!</span>
            <span className="pl-2 text-sm text-gray-400">
              Remix, Tailwind, GithubAPI, DevAPI, Cloudinary, Netlify
            </span>
          </div>
        </li>
        <li>
          <a
            className="link flex flex-col"
            href="https://artistrescue.org/"
            target="_blank"
            rel="noopener"
            title="Artist Rescue Trust"
          >
            <span>Artist Rescue</span>
            <span className="pl-2 text-sm text-gray-400">
              DatoCMS, Gatsby, GraphQL, Netlify
            </span>
          </a>
        </li>
        <li>
          <a
            className="link flex flex-col"
            href="https://tvp.com/"
            target="_blank"
            rel="noopener"
            title="Technology Venture Partners"
          >
            <span>Technology Venture Partners</span>
            <span className="pl-2 text-sm text-gray-400">
              CloudCannon, Jekyll
            </span>
          </a>
        </li>
        <li>
          <a
            className="link flex flex-col"
            href="https://protege.dev/"
            target="_blank"
            rel="noopener"
            title="Protege"
          >
            <span>Protege</span>
            <span className="pl-2 text-sm text-gray-400">
              NextJS, Tailwind, Firebase, Vercel
            </span>
          </a>
        </li>
        <li>
          <a
            className="link flex flex-col"
            href="https://ushahidi.com/"
            target="_blank"
            rel="noopener"
            title="Ushahidi"
          >
            <span>Ushahidi</span>
            <span className="pl-2 text-sm text-gray-400">
              CraftCMS, Twig, Vanilla HTML/CSS/JS
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
