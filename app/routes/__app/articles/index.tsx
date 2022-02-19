import { Link, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

export interface DevToArticleMeta {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  url: string;
  public_reactions_count: string;
  positive_reactions_count: string;
  cover_image: string;
  tag_list: Array<string>;
}
[];

export const loader: LoaderFunction = async () => {
  let articles = await fetch(
    'https://dev.to/api/articles?username=sethburtonhall&per_page=10'
  );

  return articles.json();
};

export default function Articles() {
  const articles = useLoaderData();
  console.log('articles', articles);
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article: DevToArticleMeta) => (
        <div
          key={article.id}
          className="mx-auto max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800"
        >
          <img
            className="h-64 w-full object-cover"
            src={article.cover_image}
            alt={article.title}
          />

          <div className="p-6">
            <div>
              {article.tag_list.map((tag: string) => (
                <span className="mr-3 text-xs font-medium uppercase text-blue-500 dark:text-blue-500">
                  #{tag}
                </span>
              ))}
              <Link
                to={`/articles/${article.id}`}
                prefetch="intent"
                className="dark:focus-outline-none mt-2 block transform text-2xl font-semibold transition-colors duration-200 hover:text-blue-500 focus:outline-none dark:hover:text-blue-500"
              >
                {article.title}
              </Link>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {article.description}
              </p>
            </div>

            <div className="mt-4">
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                {article.readable_publish_date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
