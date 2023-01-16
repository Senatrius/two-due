'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Header = ({
  darkMode,
  setDarkMode
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [path, setPath] = useState<string>(usePathname()!);

  return (
    <header
      className={`${
        path === '/' ? 'w-[87%]' : 'w-[87%] md:w-[72%] lg:w-[55%] xl:w-[37.5%]'
      } relative mx-auto mt-10 mb-8 flex items-center justify-between`}>
      <h1 className='text-title-m text-white md:text-title-d'>TODO</h1>
      <button
        className='ml-4'
        type='button'
        aria-label='toggle theme'
        onClick={() => setDarkMode(!darkMode)}>
        <Image
          src={darkMode ? './icon-sun.svg' : './icon-moon.svg'}
          alt=''
          width={26}
          height={26}
          priority
        />
      </button>
    </header>
  );
};
