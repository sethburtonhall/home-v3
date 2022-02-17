export default function MadeWith() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="mb-2 md:mb-0 md:mr-1">
        <a
          href="https://github.com/sethburtonhall/home-v2"
          target="_blank"
          rel="noopener"
          className="mr-1 pt-1"
        >
          v3.0
        </a>
        made with
      </div>
      <div>
        <a
          href="https://strapi.io/"
          target="_blank"
          rel="noopener"
          className="mx-1 rounded bg-indigo-700 px-2 pt-1 pb-1"
        >
          Strapi
        </a>{' '}
        <a
          href="https://remix.run/"
          target="_blank"
          rel="noopener"
          className="mx-1 rounded bg-black px-2 pt-1 pb-1"
        >
          <span className="px-1 text-blue-700">R</span>
          <span className="px-1 text-green-600">E</span>
          <span className="px-1 text-yellow-400">M</span>
          <span className="px-1 text-pink-600">I</span>
          <span className="px-1 text-red-500">X</span>
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener"
          className="ml-2 rounded bg-cyan-600 px-2 pt-1 pb-1 text-gray-900"
        >
          Tailwind
        </a>
      </div>
    </div>
  );
}
