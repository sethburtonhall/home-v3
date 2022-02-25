import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';
import type { DevToArticleMeta } from '.';

interface DevToArticle extends DevToArticleMeta {
  body_html: string;
  // body_markdown: string;
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

  return (
    <div className="article">
      {/* <img src={article.cover_image} alt={article.title} /> */}
      <h1>{article.title}</h1>
      <div className="mb-6">
        <p className="text-sm">
          <a href={article.url} target="_blank" rel="noopener" className="link">
            Posted on {article.readable_publish_date} from Dev.to
          </a>
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </div>
  );
}
