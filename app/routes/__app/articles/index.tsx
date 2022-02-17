import { Link, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  let articles = await fetch(
    'https://dev.to/api/articles?username=sethburtonhall&per_page=100'
  );

  return articles.json();
};

export default function Articles() {
  const articles = useLoaderData();
  console.log(articles);
  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        {articles.map(({ id, title, description, image } = articles) => (
          <div key={id}>
            <h2>
              <Link
                to={`/articles/${title.toLowerCase().replace(/\s/g, '-')}`}
                prefetch="intent"
              >
                {title}
              </Link>
            </h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
