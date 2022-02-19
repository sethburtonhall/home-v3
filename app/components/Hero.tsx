import Moment from 'moment';
import { CloudinaryImage } from '@cloudinary/url-gen';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';

import Typewriter from 'typewriter-effect';

const image = new CloudinaryImage('home-v3/seth_blob', {
  cloudName: 'seth-hall',
});

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:mt-16 md:grid-cols-6 md:gap-12">
      <div className="mt-12 flex flex-col items-start justify-center text-xl md:col-span-3 md:mt-0">
        <h1 className="mb-2 text-5xl">Hey Y'all!</h1>
        <p className="mb-6">
          My name is Seth and I am a Demo Engineer at
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
        <div className="font-terminal relative w-full">
          <div className="absolute w-full rounded-md rounded-b-none border-t-[32px] border-slate-800"></div>
          <div className="absolute flex p-2">
            <div className="mr-2 h-4 w-4 rounded-full bg-red-500"></div>
            <div className="mr-2 h-4 w-4 rounded-full bg-yellow-500"></div>
            <div className="mf-2 h-4 w-4 rounded-full bg-green-500"></div>
          </div>
          <div className="mb-12 rounded-md bg-slate-900 p-4 pt-10">
            <span>
              Last login: {Moment().format('ddd MMM DD HH:mm:ss')} on 💻
            </span>
            <br />
            <span className="text-blue-500">Seths-MacBook-Pro:~</span>
            <br />
            <span>$ yarn add morning ☕</span>
            <br />
            <span className="text-blue-500">Seths-MacBook-Pro:~</span>
            {/* see repo for options: https://github.com/tameemsafi/typewriterjs */}
            <div className="flex">
              <span className="mr-2">$</span>
              <Typewriter
                options={{
                  strings: [
                    'npx create-remix@latest',
                    'yarn add typescript',
                    'yarn add tailwindcss',
                    'yarn JAMstack!',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 md:pl-36">
        <AdvancedImage
          cldImg={image}
          plugins={[lazyload(), responsive({ steps: 200 }), placeholder()]}
          alt="Seth Hall"
        />
      </div>
    </div>
  );
}
