export default function Resume() {
  return (
    <div className="grid grid-cols-5">
      {/* Meta */}
      <div className="col-span-1">
        <img
          className="h-24 w-24 rounded-full"
          src="https://avatars0.githubusercontent.com/u/12097?s=460&u=e8f8f8b8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&v=4"
          alt="avatar"
        />
        {/* sethburtonhall@gmail.com https://sethhall.dev (919) 961-4503 */}
      </div>

      {/* Main Content */}
      <div>
        <h3>Seth Hall</h3>
        <h2>Web Developer</h2>
        <p className="bg-gradient-to-br from-pink-400 to-red-600 bg-clip-text text-2xl font-bold text-transparent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
          tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra
          vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
          tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
          duis convallis convallis tellus. Urna molestie at elementum eu. Nunc
          sed blandit libero volutpat.
        </p>

        <h2>Technical Skills</h2>
        <h2>Experience</h2>
        <h2>Project</h2>
        <h2>Communities</h2>
        <h2>Education</h2>
        <h2>Interests</h2>
      </div>
    </div>
  );
}
