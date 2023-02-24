import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import { Terminal, Showcase, ShortStacks, OtherProjects } from './components';


export type repoProps = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  homepage: string;
  topics: string[];
};

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    'https://api.github.com/users/sethburtonhall/repos?per_page=100',
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const repos = await res.json();
  const showcases = repos.filter((repo: repoProps) =>
    repo.topics.includes('showcase')
  );
  const shortstacks = repos.filter((repo: repoProps) =>
    repo.topics.includes('shortstack')
  );
  return {
    showcases,
    shortstacks,
  };
};

export default function Projects() {
  const { showcases, shortstacks } = useLoaderData();
  return (
    <div className="flex flex-col space-y-12">
      <Terminal />
      <Showcase showcases={showcases} />
      <ShortStacks shortstacks={shortstacks} />
      <OtherProjects />
    </div>
  );
}
