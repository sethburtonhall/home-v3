import Moment from 'moment';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="mx-auto flex w-full flex-col items-center xl:w-2/3">
      {/* Intro */}
      <h1>Hey Y'all!</h1>
      <p className="mb-6 text-center text-xl md:text-2xl">
        My name is Seth. I am a Demo Engineer at
        <a
          href="https://uniform.dev/"
          target="_blank"
          className="styled-link ml-1"
        >
          Uniform
        </a>
        .
      </p>
      <p className="mb-6 text-justify text-lg leading-4 md:mb-12 md:text-xl">
        I value authentic communication, an supportive and healthy workplace and
        creative collaboration mental health advocacy. When I am not coding I am
        building relationships and community on{' '}
        <a
          href="https://twitter.com/sethburtonhall"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          Twitter
        </a>
        ,{' '}
        <a
          href="https://virtualcoffee.io/"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          VC Slack
        </a>
        ,{' '}
        <a
          href="https://jamstack.org/"
          target="_blank"
          rel="noopener"
          className="styled-link"
        >
          Jamstack Discord
        </a>
        . Outside of work I enjoy traveling and going on outdoor adventures with
        my wife and kids. I have an MFA in film producing, a lot of which
        transfers to tech.
      </p>

      {/* Terminal */}
      <div className="font-terminal relative w-full md:w-5/6">
        <div className="absolute w-full rounded-md rounded-b-none border-t-[32px] border-slate-800"></div>
        <div className="absolute flex p-2">
          <div className="mr-2 h-4 w-4 rounded-full bg-red-500"></div>
          <div className="mr-2 h-4 w-4 rounded-full bg-yellow-500"></div>
          <div className="mf-2 h-4 w-4 rounded-full bg-green-500"></div>
        </div>
        <div className="mb-12 rounded-md bg-slate-900 p-4 pt-10 text-slate-50">
          <span>
            Last login: {Moment().format('ddd MMM DD HH:mm:ss')} on 💻
          </span>
          <br />
          <span className="text-blue-500">Seths-MacBook-Pro:~</span>
          <br />
          <span>$ yarn add breakfast</span>
          <br />
          <p className="text-2xl">
            🥯 🥓 <span className="text-3xl">☕</span>
          </p>
          {/* <span className="text-blue-500">Seths-MacBook-Pro:~</span>
          <br />
          <span>$ yarn add bio</span>
          <br />
          <p className="text-justify">
            I currently live in the mountains of North Carolina. When I am not
            coding I am hanging with my wife and two kids, playing outside or I
            am Connect with me on{' '}
            <a
              href="https://twitter.com/sethburtonhall"
              target="_blank"
              rel="noopener"
              className="text-blue-500"
            >
              Twitter
            </a>
            .
          </p> */}
          <span className="text-blue-500">Seths-MacBook-Pro:~</span>
          {/* see repo for options: https://github.com/tameemsafi/typewriterjs */}
          <div className="flex">
            <span className="mr-2">$</span>
            <Typewriter
              options={{
                strings: [
                  'npx create-remix@latest',
                  'yarn add typescript',
                  'yarn add tailwindcss',
                  'yarn add the JAMstack!',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
