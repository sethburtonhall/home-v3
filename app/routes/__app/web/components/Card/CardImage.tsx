import { CloudinaryImage } from '@cloudinary/url-gen';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';

import { repoProps } from '../..';

interface CardImageProps {
  type: repoProps;
  imagePath: string;
}

export default function CardImage({ type, imagePath }: CardImageProps) {
  const image = new CloudinaryImage(
    `home-v3/${imagePath === 'showcases' ? 'showcases' : 'shortstacks'}/${
      type.name
    }`,
    {
      cloudName: 'seth-hall',
    }
  );

  return (
    <AdvancedImage
      cldImg={image}
      plugins={[
        lazyload(),
        // responsive({ steps: [1000, 800] }),
        placeholder(),
      ]}
      alt={type.name}
      className="h-64 w-full object-cover"
    />
  );
}
