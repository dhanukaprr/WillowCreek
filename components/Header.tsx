import React, { useState } from 'react';
import { HOTEL_NAME } from '../constants';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Rates' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-brand-cream border-b border-brand-beige sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="font-serif text-2xl text-brand-darkGreen font-bold tracking-tight">{HOTEL_NAME}</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  currentPage === item.id 
                    ? 'text-brand-green font-semibold border-b-2 border-brand-green' 
                    : 'text-stone-600 hover:text-brand-green'
                } px-1 py-2 text-sm uppercase tracking-wide transition-colors duration-200`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-brand-green text-white px-5 py-2 rounded text-sm uppercase tracking-wide hover:bg-brand-darkGreen transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-600 hover:text-brand-darkGreen focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-beige">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  currentPage === item.id 
                    ? 'bg-brand-beige text-brand-darkGreen' 
                    : 'text-stone-600 hover:bg-brand-beige hover:text-brand-darkGreen'
                } block w-full text-left px-3 py-2 rounded-md text-base font-medium`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;