export default function CurrentStack() {
  return (
    <div>
      <h3 className="pb-2 text-right text-lg">Current Stack:</h3>
      <div className="glass mb-10 grid cursor-default grid-flow-row grid-cols-2 grid-rows-6 gap-3 rounded p-6 text-center text-sm font-semibold md:mb-0 md:grid-cols-4 md:grid-rows-4 lg:grid-cols-6 lg:grid-rows-2 lg:text-base">
        <div className="rounded bg-orange-600 p-1 text-gray-900">Html</div>
        <div className="rounded bg-blue-700 p-1">CSS</div>
        <div className="rounded bg-yellow-400 p-1 text-gray-900">
          Javascript
        </div>
        <div className="rounded bg-blue-500 p-1 text-gray-900">Typescript</div>
        <div className="rounded bg-gray-800 p-1 text-gray-900">
          <span className="px-1 text-blue-700">R</span>
          <span className="px-1 text-green-600">E</span>
          <span className="px-1 text-yellow-400">M</span>
          <span className="px-1 text-pink-600">I</span>
          <span className="px-1 text-red-500">X</span>
        </div>
        <div className="rounded bg-cyan-400 p-1 text-gray-900">React/Next</div>
        <div className="rounded bg-green-500 p-1 text-gray-900">Vue</div>
        <div className="rounded bg-cyan-600 p-1 text-gray-900">Tailwind</div>
        <div className="rounded bg-pink-600 p-1">Jamstack</div>
        <div className="rounded bg-white p-1 text-gray-900">CMS</div>
        <div className="rounded bg-orange-600 p-1 text-gray-900">
          Serverless
        </div>
        <div className="rounded bg-indigo-600 p-1 text-gray-900">APIs</div>
        <div className="rounded bg-yellow-500 p-1 text-gray-900">Firebase</div>
        <div className="rounded bg-black p-1 text-slate-100">SQL</div>
      </div>
    </div>
  );
}
