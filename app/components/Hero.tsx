export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full mx-auto xl:w-2/3">
      {/* Intro */}
      <h1 className="w-full mb-6 text-4xl text-center md:text-5xl">
        Hey Y'all!
      </h1>
      {/* <p className="mb-6 text-xl text-center md:text-2xl">My name is Seth.</p> */}
      <p className="text-base md:text-xl">
        Seth Hall. Senior Fronend Web Developer working in composable architecture. Creative Producer living in sabatical. Digital Nomad. Over 25 years of experience in creative media. You can find me online at{' '}
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
{/*         {' '} or {' '}
        <a
          href="https://twitter.com/sethburtonhall"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          Twitter
        </a> */}
        . {' '} 
       </p>
    </div>
  );
}
