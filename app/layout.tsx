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
      <body className='min-h-full bg-light-bg bg-light-m bg-contain bg-no-repeat text-light-text outline-primary dark:bg-dark-bg dark:bg-dark-m dark:text-dark-text md:bg-light-d dark:md:bg-dark-d'>
        <Header {...{ darkMode, setDarkMode }} />
        {children}
      </body>
    </html>
  );
}
