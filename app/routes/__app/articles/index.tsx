import { Link, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

type ArticleProps = {
  id: string;
  html_url: string;
  name: string;
};

export const loader: LoaderFunction = async () => {
  let articles = await fetch(
    'https://dev.to/api/articles?username=sethburtonhall&per_page=10'
  );

  return articles.json();
};

export default function Articles() {
  const articles = useLoaderData();
  console.log(articles);
  return (
    <div>
      <h1>Articles</h1>
      <div className="grid grid-cols-4 gap-6">
        {articles.map(({ id, title, description, cover_image } = articles) => (
          <div key={id} className="rounded-md bg-slate-100 text-zinc-900">
            <Link to={`${id}`}>
              <img src={cover_image} alt={title} className="rounded-md" />
              <div className="p-4">
                <h2 className="mb-2 font-sans">
                  <Link
                    to={`/articles/${title.toLowerCase().replace(/\s/g, '-')}`}
                    prefetch="intent"
                  >
                    {title}
                  </Link>
                </h2>
                <p className="font-serif text-base">{description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
