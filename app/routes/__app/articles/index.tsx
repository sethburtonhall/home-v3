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
  return (
    <>
      <h2 className="sr-only" role="heading">
        Articles
      </h2>
      <div className="card-grid">
        {articles.map((article: DevToArticleMeta) => (
          <div key={article.id} className="card flex flex-col">
            <img
              className="h-64 w-full object-cover"
              src={article.cover_image}
              alt={article.title}
            />

            <div className="p-6 pb-0">
              <div className="mb-2 flex flex-wrap">
                {article.tag_list.map((tag: string) => (
                  <span
                    key={tag}
                    className="mr-2 text-base font-medium text-blue-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/articles/${article.id}`}
                prefetch="intent"
                className="link text-2xl"
              >
                {article.title}
              </Link>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                {article.readable_publish_date}
              </p>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                {article.description}
              </p>
            </div>

            <div className="mt-auto flex w-full space-x-3 p-6">
              <Link to={`/articles/${article.id}`} className="button">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
