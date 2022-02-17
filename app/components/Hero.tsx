import { CloudinaryImage } from '@cloudinary/url-gen';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';

import CurrentStack from './CurrentStack';
// remove this once I strip out Strapi
// import { getStrapiMedia } from '~/utils/media';

export default function Hero() {
  const image = new CloudinaryImage('home-v3/seth_hero', {
    cloudName: 'seth-hall',
  });

  return (
    <div className="grid h-full grid-cols-1 content-center md:grid-cols-5 md:gap-4">
      <div className="order-2 w-2/3 md:order-1 md:col-span-2 md:w-full md:pr-12">
        <AdvancedImage
          cldImg={image}
          plugins={[
            lazyload(),
            responsive({ steps: 200 }),
            placeholder({ mode: 'vector' }),
          ]}
          alt="Seth Hall"
        />
      </div>
      <div className="order-1 flex flex-col items-end justify-end md:order-2 md:col-span-3">
        <h1 className="styled-link--alt">Hey Y'all!</h1>
        <p className="mb-6">
          My name is Seth Hall and I am a Demo Engineer at{' '}
          <a
            href="https://uniform.dev/"
            target="_blank"
            className="styled-link"
          >
            Uniform.dev
          </a>
        </p>
        <p className="mb-12 text-justify">
          I currently live in the mountains of North Carolina. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Turpis egestas pretium
          aenean pharetra. Orci eu lobortis elementum nibh tellus molestie.
          Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc.
          Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris.
          Posuere morbi leo urna molestie at elementum eu. Urna duis convallis
          convallis tellus. Urna molestie at elementum eu. Nunc sed blandit
          libero volutpat.
        </p>
        <CurrentStack />
      </div>
    </div>
  );
}
