import { CloudinaryImage } from '@cloudinary/url-gen';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';


export default function CardImage({project}) {
  const image = new CloudinaryImage(
    `home-v3/projects/${
      project.title
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
      alt={type.title}
      className="h-64 w-full object-cover"
    />
  );
}
