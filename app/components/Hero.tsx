export default function Hero() {
  return (
    <div className="mx-auto flex w-full flex-col items-center xl:w-2/3">
      {/* Intro */}
      <h1 className="mb-6 w-full text-center text-4xl md:text-5xl">
        Hey Y'all!
      </h1>
      {/* <p className="mb-6 text-center text-xl md:text-2xl">My name is Seth.</p> */}
      <p className="text-base md:text-xl">
        My name is Seth Hall and I am Creative Producer/Web Developer/Project Manager with a passion for creative media. You can find me online at{' '}
        <a
          href="https://www.linkedin.com/in/sethburtonhall/"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          LinkedIn
        </a>
{/*        ,{' '}
         <a
          href="https://www.instagram.com/sethburtonhall/"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          Instagram
        </a> */}
        or {' '}
        <a
          href="https://twitter.com/sethburtonhall"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          Twitter
        </a>
        . {' '}
      </p>
    </div>
  );
}
