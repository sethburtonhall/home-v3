import { ServerIcon } from '@heroicons/react/outline';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import { CloudinaryImage } from '@cloudinary/url-gen';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';

import { repoProps } from '..';

export default function ShortStacks({ shortstacks }) {
  console.log(shortstacks);
  return (
    <div>
      <div className="mb-6 flex items-center space-x-3">
        <ServerIcon className="h-7 w-7" />
        <h2>ShortStacks</h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {shortstacks.map((shortstack: repoProps) => {
          const image = new CloudinaryImage(
            `home-v3/shortstacks/${shortstack.name}`,
            {
              cloudName: 'seth-hall',
            }
          );
          console.log(image);
          const filteredTopics = shortstack.topics.filter(
            (topic: string) => !topic.includes('shortstack')
          );
          return (
            <div key={shortstack.id} className="card flex flex-col">
              <AdvancedImage
                cldImg={image}
                plugins={[
                  lazyload(),
                  // responsive({ steps: [1000, 800] }),
                  placeholder(),
                ]}
                alt={shortstack.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex w-full flex-wrap">
                  {filteredTopics.map((topic: string) => (
                    <span className="mr-2 text-xs font-medium text-blue-500 dark:text-blue-500">
                      #{topic}
                    </span>
                  ))}
                </div>

                <a
                  href={shortstack.html_url}
                  target="_blank"
                  rel="noopener"
                  title={shortstack.name}
                  className="link text-2xl"
                >
                  {shortstack.name}
                </a>

                <p className="mt-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  {shortstack.description}
                </p>
              </div>

              <div className="mt-auto p-6">
                <a
                  href={shortstack.homepage}
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
