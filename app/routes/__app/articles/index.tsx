import { Link, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { fetchAPI } from '~/utils/api';
import { getStrapiMedia } from '~/utils/media';

export const loader: LoaderFunction = async () => {
  // const articles = await fetchAPI('/articles', {
  //   populate: '*',
  // });

  const articles = await fetch(
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
        {articles.map(
          // ({ id, attributes: { title, description, image } } = articles) => (
          ({ id, title, description, image } = articles) => (
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
              {/* <img src={getStrapiMedia(image)} /> */}
            </div>
          )
        )}
      </div>
    </div>
  );
}
