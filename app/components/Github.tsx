export default function Github({ repos }) {
  return (
    <div>
      <h1>Ui Projects</h1>
      {repos.map((repo) => (
        <div key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
        </div>
      ))}
    </div>
  );
}
