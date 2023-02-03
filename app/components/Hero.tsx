import Moment from 'moment';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="mx-auto flex w-full flex-col items-center xl:w-2/3">
      {/* Intro */}
      <h1 className="mb-6 w-full text-center text-4xl md:text-5xl">
        Hey Y'all!
      </h1>
      {/* <p className="mb-6 text-center text-xl md:text-2xl">My name is Seth.</p> */}
      <p className="mb-6 text-base md:mb-12 md:text-xl">
        I am a multi-hyphenate creative (Film Producer-Web Developer-Technical Product Owner-Journeyman) currently working from the road while traveling with my family in a vintage 1994 Airstream Classic 🛻 🏕 💻 🏞️. </p>
          <p className="mb-6 text-base md:mb-12 md:text-xl">
              I value authentic communication and creative collaboration and believe a workplace should be supportive and empowering. I am currently looking for my next team and adventure.
           </p>
          <p className="mb-6 text-base md:mb-12 md:text-xl">
          You can find me online at{' '}
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

      {/* Terminal */}
      <div className="relative w-full font-terminal md:w-5/6">
        <div className="absolute w-full rounded-md rounded-b-none border-t-[32px] border-slate-800"></div>
        <div className="absolute flex p-2">
          <div className="mr-2 h-4 w-4 rounded-full bg-red-500"></div>
          <div className="mr-2 h-4 w-4 rounded-full bg-yellow-500"></div>
          <div className="mf-2 h-4 w-4 rounded-full bg-green-500"></div>
        </div>
        <div className="mb-12 rounded-md bg-slate-900 p-4 pt-10 text-sm text-slate-50 md:text-base lg:text-lg">
          <span>
            Last login: {Moment().format('ddd MMM DD HH:mm:ss')} on 💻
          </span>
          <br />
          <span className="text-blue-500">Seths-MacBook-Pro:~</span>
          <br />
          <span>$ yawn add 😕 ... 🥱</span>
          <br />
          <span className="text-blue-500">Seths-MacBook-Pro:~</span>
          <br />
          <span>$ yarn add @breakfast</span>
          <br />
          <p className="text-xl lg:text-2xl">
            🥯 🥓 <span className="text-2xl lg:text-3xl">☕</span>
          </p>
          <span className="text-blue-500">Seths-MacBook-Pro:~</span>
          {/* see repo for options: https://github.com/tameemsafi/typewriterjs */}
          <div className="flex">
            <span className="mr-2">$</span>
            <div className="">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString('npx create-remix@latest')
                    .pauseFor(500)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString('yarn add typescript')
                    .pauseFor(500)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString('yarn add tailwindcss')
                    .pauseFor(500)
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString('yarn add the JAMstack!')
                    .pauseFor(500)
                    .start();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
