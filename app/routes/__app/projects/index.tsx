import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import Github from '~/components/Github';

type LoaderData = {
  topics: string | string[];
};

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    'https://api.github.com/users/sethburtonhall/repos?per_page=100'
  );
  const repos = await res.json();
  const filteredRepos = repos.filter((repo: LoaderData) =>
    repo.topics.includes('ui')
  );
  return filteredRepos;
};

export default function Projects() {
  const repos = useLoaderData<any>();
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">Projects</h1>
      <Github repos={repos} />
    </div>
  );
}
