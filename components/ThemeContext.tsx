import { createContext } from 'react';

const initialTheme = {
  currentTheme: 'dark',
  toggleTheme: (newTheme: 'light' | 'dark') => {}
};

export const ThemeContext = createContext(initialTheme);
