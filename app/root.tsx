import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { LinksFunction, MetaFunction } from 'remix';
import { ExternalScripts, useShouldHydrate } from 'remix-utils';
import type { ExternalScriptsFunction } from 'remix-utils';

import styles from './styles/app.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: 'data:image/svg+xml,<svg xmlns=%22https://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😄</text></svg>',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export const meta: MetaFunction = () => {
  const description = 'Seth Hall | Multi-Hyphenate Creative';

  return {
    title: description,
    description,
    keywords: 'Seth Hall, multi-hyphenate creative, creative producer, web developer, product owner, film, music, web',
    'twitter:image':
      'https://res.cloudinary.com/seth-hall/image/upload/v1648303308/home-v3/social.png',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@sethburtonhall',
    'twitter:site': '@sethburtonhall',
    'twitter:title': 'Seth Hall | Multi-Hyphenate Creative',
    'twitter:description': description,
  };
};

// https://highlightjs.org/usage/
let scripts: ExternalScriptsFunction = () => {
  return [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js',
    },
  ];
};

export let handle = {
  scripts,
  hydrate: true,
};

function App() {
  let shouldHydrate = useShouldHydrate();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {shouldHydrate && <ExternalScripts />}
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        <script>hljs.highlightAll()</script>
      </body>
    </html>
  );
}

export default function AppwithProviders() {
  return <App />;
}
