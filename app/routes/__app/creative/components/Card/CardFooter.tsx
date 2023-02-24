export default function CardFooter(type) {
  return (
    <div className="mt-auto flex w-full space-x-3 p-6">
      <a href={type.url} target="_blank" rel="noopener" className="button">
        See Project
      </a>
    </div>
  );
}
