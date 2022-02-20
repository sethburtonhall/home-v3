export default function MadeWith() {
  return (
    <div className="order-1 mb-6 flex flex-col items-center justify-center md:order-2 md:mb-0 md:flex-row">
      <div className="mb-2 md:mb-0 md:mr-1">
        <a
          href="https://github.com/sethburtonhall/home-v3-frontend"
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
          href="https://remix.run/"
          target="_blank"
          rel="noopener"
          className="mx-1 rounded bg-black px-2 pt-1 pb-1"
        >
          <span className="pr-1 text-blue-700">R</span>
          <span className="pr-1 text-green-600">E</span>
          <span className="pr-1 text-yellow-400">M</span>
          <span className="pr-1 text-pink-600">I</span>
          <span className="pr-1 text-red-500">X</span>
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener"
          className="ml-2 rounded bg-cyan-600 px-2 pt-1 pb-1 text-gray-900 hover:text-gray-900"
        >
          Tailwind
        </a>
      </div>
    </div>
  );
}
