import { Outlet } from 'remix';

import { CloudinaryImage } from '@cloudinary/url-gen';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';

import { Header, Footer } from '~/components';

const bgImage = new CloudinaryImage('home-v3/mountains_fade', {
  cloudName: 'seth-hall',
});

export default function Index() {
  return (
    <div className="relative overflow-hidden bg-slate-50 from-slate-900 to-slate-800 dark:bg-gradient-to-r">
      <AdvancedImage
        cldImg={bgImage}
        plugins={[lazyload(), responsive({ steps: 200 }), placeholder()]}
        alt="Seth Hall"
        className="absolute inset-0 h-full w-full object-cover object-right opacity-30"
      />
      <div className="container relative mx-auto flex min-h-screen flex-col px-3 md:px-0">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
