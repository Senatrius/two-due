'use client';

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { ThemeContext } from './ThemeContext';

const root = document!.querySelector('html') as HTMLElement;

export const ThemeContextWrapper = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname()!;
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      <Header {...{ path }} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
