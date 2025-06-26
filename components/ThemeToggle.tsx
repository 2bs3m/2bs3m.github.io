import React from 'react';
import { useTheme } from '../hooks/useTheme';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-white hover:text-sky-200 hover:bg-white/10 dark:hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300"
      aria-label={theme === 'light' ? 'Passer au thème sombre' : 'Passer au thème clair'}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6" />
      ) : (
        <SunIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
