import { useLoaderData } from 'remix';
import type { LoaderFunction, MetaFunction } from 'remix';
import { fetchAPI } from '~/utils/api';
import { getStrapiMedia } from '~/utils/media';

export const loader: LoaderFunction = async () => {
  const globalRes = await fetchAPI('/global', {
    populate: {
      favicon: '*',
      defaultSeo: {
        populate: '*',
      },
    },
  });

  return globalRes.data;
};

export default function Index() {
  const global = useLoaderData();

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">Hello Remix</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        pretium aenean pharetra. Orci eu lobortis elementum nibh tellus
        molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel
        turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
        tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
        duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed
        blandit libero volutpat.
      </p>
    </>
  );
}
