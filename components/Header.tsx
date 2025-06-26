import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BUSINESS_NAME } from '../constants';
import CartIcon from './CartIcon';
import ThemeToggle from './ThemeToggle';
import MenuIcon from './icons/MenuIcon';
import { NavLinkItem } from '../types';

interface HeaderProps {
  toggleMobileMenu: () => void; // Renamed from toggleSidebar
}

const navLinks: NavLinkItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Catalogue', path: '/catalog' },
  { label: 'Services', path: '/services' },
  { label: 'À Propos', path: '/about' },
];

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-40"> {/* z-index lower than mobile menu */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
          {BUSINESS_NAME}
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-sky-200 transition-colors ${isActive ? 'font-semibold border-b-2 border-sky-200' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <CartIcon />
          <button
            onClick={toggleMobileMenu} // Updated to call toggleMobileMenu
            className="md:hidden text-white hover:text-sky-200 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;