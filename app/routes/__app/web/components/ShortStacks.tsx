import { ServerIcon } from '@heroicons/react/outline';

import { repoProps } from '..';

import { CardImage, CardBody, CardFooter } from './Card';

export default function ShortStacks({
  shortstacks,
}: {
  shortstacks: repoProps[];
}) {
  return (
    <div>
      <div className="mb-6 flex items-center space-x-3">
        <ServerIcon className="h-7 w-7" />
        <h2>ShortStacks</h2>
      </div>
      <div className="card-grid">
        {shortstacks.map((shortstack: repoProps) => {
          return (
            <div key={shortstack.id} className="card flex flex-col w-full">
              <CardImage type={shortstack} imagePath="shortstacks" />
              <CardBody type={shortstack} tag="shortstack" />
              <CardFooter type={shortstack} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
