export default function CardFooter({project}) {
  return (
    <div className="mt-auto flex w-full space-x-3 p-6">
      <a href={project.url} target="_blank" rel="noopener" className="button">
        Check It Out
      </a>
    </div>
  );
}
