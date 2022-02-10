import { Outlet } from 'remix';
import type { LoaderFunction, MetaFunction } from 'remix';

// pass into React Context?
import { fetchAPI } from '../../lib/api';
import { getStrapiMedia } from '../../lib/media';

import { Navbar, Footer } from '~/components';

export const loader: LoaderFunction = async () => {
  const globalRes = await fetchAPI('/global', {
    // figure out this object structure vs the json object output
    populate: {
      favicon: '*',
      defaultSeo: {
        populate: '*',
      },
    },
  });

  return globalRes.data;
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `${data.attributes.defaultSeo.metaTitle}`,
    description: `${data.attributes.defaultSeo.metaDescription}`,
  };
};

export default function Index() {
  return (
    <div>
      <Navbar />
      <div>Test</div>
      <Outlet />
      <Footer />
    </div>
  );
}
