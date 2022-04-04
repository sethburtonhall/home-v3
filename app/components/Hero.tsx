import Moment from 'moment';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="mx-auto flex w-full flex-col items-center xl:w-2/3">
      {/* Intro */}
      <h1 className="mb-6 text-4xl md:text-5xl">Hey Y'all!</h1>
      {/* <p className="mb-6 text-center text-xl md:text-2xl">My name is Seth.</p> */}
      <p className="mb-6 text-base md:mb-12 md:text-xl">
        My name is Seth Hall. I am a front end focused web developer from North
        Carolina (soon to be a traveling digital nomad). I value authentic
        communication and creative collaboration and believe a workplace should
        be supportive and empowering. I am currently working in the Jamstack as
        a Demo Engineer at
        <a
          href="https://uniform.dev/"
          target="_blank"
          className="styled-link ml-1"
        >
          Uniform
        </a>
        . When I am not coding, I am usually embarking on epic adventures with
        my wife and kids. You can also find me hanging out on{' '}
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
          Jamstack Discord.
        </a>
      </p>

      {/* Terminal */}
      <div className="relative w-full font-terminal md:w-5/6">
        <div className="absolute w-full rounded-md rounded-b-none border-t-[32px] border-slate-800"></div>
        <div className="absolute flex p-2">
          <div className="mr-2 h-4 w-4 rounded-full bg-red-500"></div>
          <div className="mr-2 h-4 w-4 rounded-full bg-yellow-500"></div>
          <div className="mf-2 h-4 w-4 rounded-full bg-green-500"></div>
        </div>
        <div className="mb-12 rounded-md bg-slate-900 p-4 pt-10 text-sm text-slate-50 lg:text-lg">
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
          <div className="flex text-base lg:text-lg ">
            <span className="mr-2">$</span>
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
  );
}
