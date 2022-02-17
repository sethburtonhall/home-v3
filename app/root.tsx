import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import type { LinksFunction, MetaFunction, LoaderFunction } from 'remix';

import clsx from 'clsx';

import {
  NonFlashOfWrongTheme,
  ThemeProvider,
  useTheme,
} from './utils/theme-provider';
import type { Theme } from '~/utils/theme-provider';
import { getThemeSession } from '~/utils/theme.server';

import styles from './styles/app.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😄</text></svg>',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export const meta: MetaFunction = () => {
  const description = 'Seth Hall | Web Developer';

  return {
    title: description,
    description,
    keywords: 'Seth Hall, web developer',
    'twitter:image':
      'https://res.cloudinary.com/seth-hall/image/upload/v1644975921/home-v3/social.png',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@sethburtonhall',
    'twitter:site': '@sethburtonhall',
    'twitter:title': 'Seth Hall | Web Developer',
    'twitter:description': description,
  };
};

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

function App() {
  const [theme] = useTheme();
  const data = useLoaderData<LoaderData>();

  return (
    // https://www.mattstobbs.com/remix-dark-mode/ Nice one!! 😎 🤯
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfWrongTheme ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export default function AppwithProviders() {
  const data = useLoaderData<LoaderData>();
  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
