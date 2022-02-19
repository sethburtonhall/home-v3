import { Fragment } from 'react';
import { Link } from 'remix';
import { Theme, useTheme } from '~/utils/theme-provider';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigationItems = [
  {
    id: 1,
    label: 'Articles',
    href: '/articles',
  },
  {
    id: 2,
    label: 'Projects',
    href: '/projects',
  },
  {
    id: 3,
    label: 'Resume',
    href: '/resume',
  },
];

const navigation = navigationItems.map((link) => (
  <Link
    key={link.id}
    className="from-blue-500 to-blue-600 p-3 text-xl font-semibold hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
    to={link.href}
  >
    {link.label}
  </Link>
));

export default function Navbar() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <Popover className="relative">
      <div className="flex items-center justify-between pt-3">
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="styled-link font-logo text-2xl md:text-5xl">
            Seth Hall
          </Link>
          <div className="hidden flex-grow justify-end md:flex">
            {navigation}
            <button onClick={toggleTheme} className="text-3xl">
              {theme === Theme.LIGHT ? '🌚' : '🌝'}
            </button>
          </div>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleTheme} className="mr-2 text-3xl">
            {theme === Theme.LIGHT ? '🌚' : '🌝'}
          </button>
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-100   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-8 w-8" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden"
        >
          <div className="rounded-lg bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="pt-3 pb-6">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="styled-link font-logo text-2xl md:text-5xl"
                >
                  Seth Hall
                </Link>
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-8 w-8" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-2">{navigation}</nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
