import React from 'react';
import {
  BookOpenIcon,
  ShieldCheckIcon,
  BarsArrowDownIcon,
  UserCircleIcon,
  MoonIcon,
  ArrowRightEndOnRectangleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const ICON_STYLE = 'stroke-black w-8 h-8';

const NAV_LINKS_TOP = [
  {
    name: 'Link 1',
    href: '/',
    icon: <BookOpenIcon className={ICON_STYLE} />,
  },
  {
    name: 'Link 2',
    href: '/',
    icon: <ShieldCheckIcon className={ICON_STYLE} />,
  }
];

const NAV_LINKS_BOT = [
  {
    name: 'Link 3',
    href: '/',
    icon: <BarsArrowDownIcon className={ICON_STYLE} />,
  },
  {
    name: 'Link 4',
    href: '/',
    icon: <UserCircleIcon className={ICON_STYLE} />,
  },
  {
    name: 'Link 5',
    href: '/',
    icon: <MoonIcon className={ICON_STYLE} />,
  },
  {
    name: 'Link 6',
    href: '/',
    icon: <ArrowRightEndOnRectangleIcon className={ICON_STYLE} />,
  },
];

const Navlinks = () => {
  return (
    <div className='pt-4 flex flex-col items-center border-t-2 border-t-zinc-300 h-full'>
      {/* Top Links */}
      <ul className='flex flex-col items-center gap-4'>
        {NAV_LINKS_TOP.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.href} className='block p-2 rounded-md hover:bg-zinc-400'>
                {link.icon}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Bottom Links */}
      <ul className='flex flex-col items-center gap-4 mt-auto'>
        {NAV_LINKS_BOT.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.href} className='block p-2 rounded-md hover:bg-zinc-400'>
                {link.icon}
              </Link>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Navlinks;
