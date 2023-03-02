import { Fragment } from 'react';
import { NavLink, Link } from 'remix';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

let logo = (
  <Link
    to="/"
    className="styled-link font-logo text-4xl md:text-5xl"
    role="heading"
    aria-level={1}
  >
    Seth Hall
  </Link>
);

let navigationItems = [
  {
    id: 1,
    label: 'Creative',
    href: '/creative',
  },
  {
    id: 2,
    label: 'Web',
    href: '/web',
  },
  // {
  //   id: 3,
  //   label: 'Articles',
  //   href: '/articles',  
  // },
];

let navigation = navigationItems.map((link) => (
  <Popover.Button
    prefetch="intent"
    as={NavLink}
    key={link.id}
    to={link.href}
    className="from-blue-500 to-blue-600 p-3 text-xl font-semibold hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
  >
    <span>{link.label}</span>
  </Popover.Button>
));

export default function Navbar() {
  return (
    <Popover className="relative">
      <div className="flex items-center justify-between p-4" role="banner">
        <div className="flex w-full items-center justify-between">
          {logo}
          <nav
            className="hidden flex-grow justify-end md:flex"
            role="navigation"
          >
            {navigation}
          </nav>
        </div>
        <div className="flex md:hidden">
          <Popover.Button className="focus-link inline-flex items-center justify-center rounded-md p-2 dark:text-slate-100">
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
          className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden z-[1]"
        >
          <div className="rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              {logo}
              <Popover.Button className="focus-link inline-flex items-center justify-center rounded-md p-2 dark:text-slate-100">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-8 w-8" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="mt-6 flex items-center justify-around">
              {navigation}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
