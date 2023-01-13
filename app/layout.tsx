'use client';

import { useState } from 'react';
import '../styles/globals.css';

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
      <body className='min-h-full bg-contain bg-no-repeat dark:bg-dark-bg bg-light-bg bg-light-m dark:bg-dark-m md:bg-light-d dark:md:bg-dark-d'>
        {children}
      </body>
    </html>
  );
}
