import { Outlet, useLoaderData } from 'remix';
import type { LoaderFunction, MetaFunction } from 'remix';

// pass into React Context?
import { fetchAPI } from '~/utils/api';
// import { getStrapiMedia } from '~/utils/media';

import { Header, Footer } from '~/components';

export const loader: LoaderFunction = async () => {
  const global = await fetchAPI('/global', {
    populate: {
      favicon: '*',
      defaultSeo: {
        populate: '*',
      },
      navigation: {
        populate: '*',
      },
    },
  });

  const { attributes } = global.data;
  return attributes;
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `${data.defaultSeo.metaTitle}`,
    description: `${data.defaultSeo.metaDescription}`,
  };
};

type GlobalProps = {
  // add more global based props here
  navigation: {
    id: number;
    links: { id: string; label: string; href: string }[];
  };
};

export default function Index() {
  const data = useLoaderData<GlobalProps>();
  const { navigation } = data;

  return (
    <div className="background">
      <div className="container mx-auto flex flex-col h-screen">
        <Header navigation={navigation} />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
