import { Link, useLoaderData } from 'remix';
import type { LinksFunction, LoaderFunction } from 'remix';
import type { ExternalScriptsFunction } from 'remix-utils';
import invariant from 'tiny-invariant';
import { ArrowLeftIcon } from '@heroicons/react/outline';

import type { DevToArticleMeta } from '.';

interface DevToArticle extends DevToArticleMeta {
  body_html: string;
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark-dimmed.min.css',
    },
  ];
};

// // https://highlightjs.org/usage/
// let scripts: ExternalScriptsFunction = () => {
//   return [
//     {
//       src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js',
//     },
//   ];
// };

// export let handle = {
//   scripts,
//   hydrate: true,
// };

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
      <Link to="/articles" className="mb-4 flex items-center space-x-2">
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Back</span>
      </Link>
      <h1 className="text-4xl md:text-5xl">{article.title}</h1>
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
