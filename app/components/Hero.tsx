export default function Hero() {
  return (
    <div className="mx-auto flex w-full flex-col items-center xl:w-2/3">
      {/* Intro */}
      <h1 className="mb-6 w-full text-center text-4xl md:text-5xl">
        Hey Y'all!
      </h1>
      {/* <p className="mb-6 text-center text-xl md:text-2xl">My name is Seth.</p> */}
      <p className="mb-6 text-base md:text-xl">
        I am a multi-hyphenate creative (Film Producer-Web Developer-Technical Product Owner-Journeyman) currently working from the road while traveling with my family in a vintage Airstream Classic. 💻 🏞️</p>
      <p className="mb-6 text-base md:text-xl">
        I value authentic communication and creative collaboration and believe a workplace should be supportive and empowering. I am currently looking for my next team and adventure. You can find me online at{' '}
        <a
          href="https://twitter.com/sethburtonhall"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          Twitter
        </a>
        {' '},{' '}
        <a
          href="https://www.instagram.com/sethburtonhall/"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          Instagram
        </a>
        {' '} or {' '}
        <a
          href="https://www.linkedin.com/in/sethburtonhall/"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          LinkedIn
        </a>
        . {' '}
      </p>
    </div>
  );
}
