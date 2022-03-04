import { Fragment } from 'react';
import { NavLink, Link } from 'remix';
import { Theme, useTheme } from '~/utils/theme-provider';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

let logo = (
  <Link
    to="/"
    className="styled-link font-logo text-3xl md:text-4xl lg:text-5xl"
  >
    Seth Hall
  </Link>
);
let activeClassName =
  'from-blue-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent';

let navigationItems = [
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
  // {
  //   id: 3,
  //   label: 'Resume',
  //   href: '/resume',
  // },
];
let navigation = navigationItems.map((link) => (
  <NavLink
    key={link.id}
    to={link.href}
    className="from-blue-500 to-blue-600 p-3 text-xl font-semibold hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
  >
    {({ isActive }) => (
      <span className={isActive ? activeClassName : undefined}>
        {link.label}
      </span>
    )}
  </NavLink>
));

export default function Navbar() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  const themeSwitcher = (
    <button onClick={toggleTheme} className="text-3xl">
      {theme === Theme.LIGHT ? '🌚' : '🌝'}
    </button>
  );

  return (
    <Popover className="relative">
      <div className="flex items-center justify-between p-4">
        <div className="flex w-full items-center justify-between">
          {logo}
          <div className="hidden flex-grow justify-end md:flex">
            {navigation}
            {themeSwitcher}
          </div>
        </div>
        <div className="flex md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 dark:text-slate-100">
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
          <div className="rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              {logo}
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 dark:text-slate-100">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-8 w-8" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="mt-6 flex items-center justify-around">
              {navigation}
              {themeSwitcher}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
