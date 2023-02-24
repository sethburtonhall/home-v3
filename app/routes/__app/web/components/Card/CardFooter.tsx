import { repoProps } from '../..';

interface CardFooterProps {
  type: repoProps;
}

export default function CardFooter({ type }: CardFooterProps) {
  return (
    <div className="mt-auto flex w-full space-x-3 p-6">
      <a
        href={type.html_url}
        target="_blank"
        rel="noopener"
        className="button bg-black text-slate-50 hover:bg-black"
      >
        Github
      </a>

      <a href={type.homepage} target="_blank" rel="noopener" className="button">
        Visit Site
      </a>
    </div>
  );
}
