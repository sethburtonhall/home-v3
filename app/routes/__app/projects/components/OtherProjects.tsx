import { DatabaseIcon } from '@heroicons/react/outline';

export default function OtherProjects() {
  return (
    <div>
      <div className="mb-6 flex items-center space-x-1">
        <DatabaseIcon className="h-7 w-7" />
        <h2>Other Projects</h2>
      </div>
      <ul>
        <li>
          <a
            className="link"
            href="https://artistrescue.org/"
            target="_blank"
            rel="noopener"
            title="Artist Rescue Trust"
          >
            Artist Rescue
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://tvp.com/"
            target="_blank"
            rel="noopener"
            title="Technology Venture Partners"
          >
            Technology Venture Partners
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://protege.dev/"
            target="_blank"
            rel="noopener"
            title="Protege"
          >
            Protege
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://ushahidi.com/"
            target="_blank"
            rel="noopener"
            title="Ushahidi"
          >
            Ushahidi
          </a>
        </li>
      </ul>
    </div>
  );
}
