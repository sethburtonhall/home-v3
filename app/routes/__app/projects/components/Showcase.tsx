import { ColorSwatchIcon } from '@heroicons/react/outline';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import { CloudinaryImage } from '@cloudinary/url-gen';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';

import { repoProps } from '..';

export default function Showcase({ showcases }) {
  console.log('showcases', showcases);
  return (
    <div>
      <div className="mb-6 flex items-center space-x-1">
        <ColorSwatchIcon className="h-7 w-7" />
        <h2>Showcase</h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((showcase: repoProps) => {
          const image = new CloudinaryImage(
            `home-v3/showcases/${showcase.name}`,
            {
              cloudName: 'seth-hall',
            }
          );
          console.log(image);
          const filteredTopics = showcase.topics.filter(
            (topic: string) => !topic.includes('showcase')
          );
          return (
            <div key={showcase.id} className="card flex flex-col">
              <AdvancedImage
                cldImg={image}
                plugins={[
                  lazyload(),
                  // responsive({ steps: [1000, 800] }),
                  placeholder(),
                ]}
                alt={showcase.name}
                className="h-64 w-full object-cover"
              />

              <div className="flex flex-col p-6">
                <div className="flex w-full flex-wrap">
                  {filteredTopics.map((topic: string) => (
                    <span className="mr-2 text-xs font-medium text-blue-500 dark:text-blue-500">
                      #{topic}
                    </span>
                  ))}
                </div>

                <a
                  href={showcase.html_url}
                  target="_blank"
                  rel="noopener"
                  title={showcase.name}
                  className="link text-2xl"
                >
                  {showcase.name}
                </a>

                <p className="mt-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  {showcase.description}
                </p>
              </div>

              <div className="mt-auto p-6">
                <a
                  href={showcase.homepage}
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-blue-500"
                >
                  <span className="flex w-full items-center justify-end space-x-1">
                    <span>Visit Site</span>
                    <ExternalLinkIcon className="h-3 w-3" />
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
