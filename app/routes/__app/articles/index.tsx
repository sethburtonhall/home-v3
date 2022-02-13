import { Link, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { fetchAPI } from '~/utils/api';
import { getStrapiMedia } from '~/utils/media';

export const loader: LoaderFunction = async () => {
  const articles = await fetchAPI('/articles', {
    populate: '*',
  });

  return articles.data;
};

export default function Articles() {
  const articles = useLoaderData();
  console.log(articles);
  return (
    <div>
      <h1>Articles</h1>
      {articles.map(
        ({ id, attributes: { title, description, image } } = articles) => (
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
            <img src={getStrapiMedia(image)} />
          </div>
        )
      )}
    </div>
  );
}
