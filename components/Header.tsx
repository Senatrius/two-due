'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const Header = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className='relative mx-auto mt-10 mb-8 flex items-center justify-between'>
      <h1 className='text-title-m text-white md:text-title-d'>TODO</h1>
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
