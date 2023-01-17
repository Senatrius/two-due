import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const Header = ({ path }: { path: string }) => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className='relative mx-auto mt-10 mb-8 flex items-center justify-between'>
      <div className='flex items-center'>
        {path !== '/' && (
          <Link
            aria-label='home'
            className='mr-4 flex items-center'
            href='/'>
            <Image
              src='./icon-arrow.svg'
              alt=''
              width={26}
              height={26}
              priority
            />
          </Link>
        )}
        <h1 className='text-title-m text-white md:text-title-d'>TODO</h1>
      </div>
      <button
        className='ml-4'
        type='button'
        aria-label='toggle theme'
        onClick={() => toggleTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
        <Image
          src={currentTheme === 'dark' ? './icon-sun.svg' : './icon-moon.svg'}
          alt=''
          width={26}
          height={26}
          priority
        />
      </button>
    </header>
  );
};
