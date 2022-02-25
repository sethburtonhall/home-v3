import { repoProps } from '../..';

interface CardBodyProps {
  type: repoProps;
  tag: string;
}

export default function CardBody({ type, tag }: CardBodyProps) {
  const filteredTopics = type.topics.filter(
    (topic: string) => !topic.includes(`${tag}`)
  );

  return (
    <div className="flex flex-col p-6">
      <div className="mb-2 flex w-full flex-wrap">
        {filteredTopics.map((topic: string, index: number) => (
          <span
            key={index}
            className="mr-2 text-xs font-medium text-blue-500 dark:text-blue-500"
          >
            #{topic}
          </span>
        ))}
      </div>

      <a
        href={type.html_url}
        target="_blank"
        rel="noopener"
        title={type.name}
        className="link text-2xl"
      >
        {type.name}
      </a>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {type.description}
      </p>
    </div>
  );
}
