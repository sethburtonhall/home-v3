export default function CardBody({title, url, description}) {

  return (
    <div className="flex flex-col p-6">
      <a
        href={url}
        target="_blank"
        rel="noopener"
        title={title}
        className="link text-2xl"
      >
        {title}
      </a>

      <p className="text-xs text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
