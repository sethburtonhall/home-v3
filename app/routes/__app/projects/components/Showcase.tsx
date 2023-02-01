import { ColorSwatchIcon } from '@heroicons/react/outline';

import { repoProps } from '..';

import { CardImage, CardBody, CardFooter } from './Card';

export default function Showcase({ showcases }: { showcases: repoProps[] }) {
  return (
    <div>
      <div className="mb-6 flex items-center space-x-1">
        <ColorSwatchIcon className="h-7 w-7" />
        <h2>Web Projects</h2>
      </div>
      <div className="card-grid">
        {showcases.map((showcase: repoProps) => {
          return (
            <div key={showcase.id} className="card flex flex-col">
              <CardImage type={showcase} imagePath="showcases" />
              <CardBody type={showcase} tag="showcase" />
              <CardFooter type={showcase} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
