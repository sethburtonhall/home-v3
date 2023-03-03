import { ColorSwatchIcon } from '@heroicons/react/outline';

import { CardImage, CardBody, CardFooter } from './Card';

const creativeProjects = [
  {
    id: 1,
    title: 'Film',
    url: 'https://www.dropbox.com/s/o7nn7n83e1w8e97/Development_Slate.pdf?dl=0',
    description: "My film development slate"
  },
  {
    id: 2,
    title: 'Tropical Gardens',
    url: 'https://player.vimeo.com/video/327592520',
    description: "A short film about love, loss, and one man's obsession to set a putt-putt course record"
  },
  {
    id: 3,
    title: 'Music',
    url: '',
    description: "A selection of my music"
  },
  {
    id: 4,
    title: 'Holy Smokes!',
    url: 'https://www.dropbox.com/sh/55s3y33riutfmlc/AACYa1dKcquc8S6s0Pi1fPPwa?dl=0',
    description: "A limited run comic strip from the minds of Seth Hall and Hugh Greene"
  },
  {
    id: 5,
    title: 'Creative Producer IG',
    url: 'https://www.instagram.com/the.creative.producer/?hl=en',
    description: "Genuine stories, practical insight, and inspirational victories from the unsung heroes of independent film"
  },
  {
    id: 6,
    title: 'Virtual Coffee Podcast',
    url: 'https://virtualcoffee.io/podcast/seth-hall-from-film-production-to-technical-product-owner-a-career-changers-story',
    description: "A discussion about how my work as a Creative Producer in film translates to software and tech"
  },
];

export default function CreativeProjects() {
  return (
    <div>
      <div className="mb-6 flex items-center space-x-1">
        <ColorSwatchIcon className="h-7 w-7" />
        <h2>Creative Projects</h2>
      </div>
      <div className="card-grid">
        {creativeProjects.map((project) => {
          return (
            <div key={project.id} className="card flex flex-col">
              <CardImage project={project}/>
              <CardBody project={project} />
              <CardFooter project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
