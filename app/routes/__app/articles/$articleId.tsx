import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';
import type { DevToArticleMeta } from '.';

interface DevToArticle extends DevToArticleMeta {
  body_html: string;
  body_markdown: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.articleId, 'article is required');
  const article = await fetch(
    `https://dev.to/api/articles/${params.articleId}`
  );
  return article;
};

export default function Article() {
  const article = useLoaderData<DevToArticle>();
  // console.log('article', { title });
  return (
    <div>
      {/* <img src={article.cover_image} alt={article.title} /> */}
      <h2>{article.title}</h2>
      <p>{article.readable_publish_date}</p>
      <a href={article.url} target="_blank" rel="noopener">
        Read Post on Dev.to
      </a>
      <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </div>
  );
}
