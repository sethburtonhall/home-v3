export default function CardBody(type) {

  return (
    <div className="flex flex-col p-6">
      <a
        href={type.url}
        target="_blank"
        rel="noopener"
        title={type.title}
        className="link text-2xl"
      >
        {type.title}
      </a>

      <p className="text-xs text-gray-600 dark:text-gray-400">
        {type.description}
      </p>
    </div>
  );
}
