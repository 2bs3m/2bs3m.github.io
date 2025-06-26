import React from 'react';
import { NavLink } from 'react-router-dom';
import { BUSINESS_NAME } from '../constants';
import ThemeToggle from './ThemeToggle';
import CartIcon from './CartIcon';
import CloseIcon from './icons/CloseIcon';
import { NavLinkItem } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const navLinks: NavLinkItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Catalogue', path: '/catalog' },
  { label: 'Services', path: '/services' },
  { label: 'À Propos', path: '/about' },
  { label: 'Panier', path: '/cart' },
  { label: 'FAQ', path: '/faq' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col p-4 transition-opacity duration-300 ease-in-out md:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
    >
      {/* Menu Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 id="mobile-menu-title" className="text-2xl font-bold text-primary dark:text-primary-light">
          {BUSINESS_NAME}
        </h2>
        <button 
          onClick={toggleMenu} 
          className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light"
          aria-label="Fermer le menu"
        >
          <CloseIcon className="h-8 w-8" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow flex flex-col items-center justify-center space-y-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={toggleMenu} // Close menu on link click
            className={({ isActive }) =>
              `text-2xl font-medium transition-colors
               ${isActive 
                  ? 'text-primary dark:text-primary-light' 
                  : 'hover:text-primary dark:hover:text-primary-light'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Menu Footer: Theme Toggle and Cart */}
      <div className="py-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex justify-around items-center">
            <div className="flex items-center space-x-2">
                 <span className="text-sm">Thème:</span>
                 <ThemeToggle />
            </div>
           <div className="text-white"> {/* This div is to wrap CartIcon to ensure its styles apply correctly */}
             <CartIcon />
           </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;