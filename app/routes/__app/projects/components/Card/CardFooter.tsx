import { repoProps } from '../..';

interface CardFooterProps {
  type: repoProps;
}

export default function CardFooter({ type }: CardFooterProps) {
  return (
    <div className="mt-auto flex space-x-3 p-6">
      <a
        href={type.html_url}
        target="_blank"
        rel="noopener"
        className="button bg-black hover:bg-black"
      >
        <span className="flex w-full items-center justify-start space-x-1">
          <span>Github</span>
        </span>
      </a>

      <a href={type.homepage} target="_blank" rel="noopener" className="button">
        <span className="flex w-full items-center justify-start space-x-1">
          <span>Visit Site</span>
        </span>
      </a>
    </div>
  );
}
