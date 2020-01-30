import Link from 'next/link';
import { useState } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';

function Header() {
  const [isActive, toggleButton] = useState(false);

  return (
    <header className='bg-white shadow-xl m-0'>
      <div className='flex flex-wrap md:flex-no-wrap items-center justify-between max-w-full m-0 px-4 py-6 md:px-8 '>
        <div className='flex items-center'>
          <Link href='/'>
            <a>
              <img src='NITlogo.png' className='w-12 mr-4' />{' '}
            </a>
          </Link>
          <Link href='/'>
            <a className='font-bold text-teal-500 text-2xl hidden md:block lg:block'>
              Natives In Tech
            </a>
          </Link>
        </div>
        <div className='block md:hidden flex'>
          <HamburgerSqueeze
            isActive={isActive}
            onClick={() => toggleButton(!isActive)}
          />
        </div>

        <ul
          className={`${
            isActive ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-base w-full md:w-auto mr-0`}
        >
          {[
            { title: 'About', route: '/about' },
            { title: 'Awesome', route: '/awesome' },
            { title: 'Conference', route: '/conference' },
            { title: 'Blog', route: '/blog' },
            { title: 'Forum', route: '/forum' }
          ].map(navigationItem => (
            <li className='mt-3 md:mt-0 md:ml-6' key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className='block text-teal-500'>{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
