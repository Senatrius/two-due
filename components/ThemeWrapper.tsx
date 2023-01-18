'use client';

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { ThemeContext } from './ThemeContext';

export const ThemeContextWrapper = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname()!;
  const [theme, setTheme] = useState('dark');

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'dark');
  }, []);

  useEffect(() => {
    const root = document.querySelector('html') as HTMLElement;
    if (theme !== 'dark') root.classList.remove('dark');
    else root.classList.add('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      <Header {...{ path }} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
