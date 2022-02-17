import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

type LoaderData = {
  topics: string | string[];
};

type repoProps = {
  id: string;
  html_url: string;
  name: string;
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
  console.log(repos);
  return (
    <div>
      <h1 className="text-3xl text-red-500 underline">Projects</h1>
      {repos.map((repo: repoProps) => (
        <div key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
        </div>
      ))}
    </div>
  );
}
