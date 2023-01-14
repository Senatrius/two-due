'use client';

import { useState } from 'react';
import '../styles/globals.css';
import { Header } from './Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <html
      className={`min-h-full ${darkMode ? 'dark' : ''}`}
      lang='en'>
      <body className='bg-siz min-h-full bg-light-bg bg-light-m bg-contain bg-no-repeat dark:bg-dark-bg dark:bg-dark-m md:bg-light-d dark:md:bg-dark-d'>
        <div className='mx-auto w-[87%] md:w-[72%] lg:w-[55%] xl:w-[37.5%]'>
          <Header {...{ darkMode, setDarkMode }} />
          {children}
        </div>
      </body>
    </html>
  );
}
