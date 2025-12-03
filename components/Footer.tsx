import React from 'react';
import { HOTEL_NAME, TAGLINE, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkGreen text-brand-beige py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-brand-cream mb-2">{HOTEL_NAME}</h3>
            <p className="text-sm opacity-80 italic">{TAGLINE}</p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-serif text-lg font-semibold text-brand-cream mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>{PHONE_NUMBER}</p>
              <p>{EMAIL_ADDRESS}</p>
            </div>
          </div>

          {/* Social / Copy */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end justify-between">
             <div className="flex space-x-4 mb-4">
               {/* Placeholder Social Icons */}
               <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center hover:bg-brand-cream hover:text-brand-darkGreen transition-colors cursor-pointer">
                 <span className="font-bold text-xs">FB</span>
               </div>
               <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center hover:bg-brand-cream hover:text-brand-darkGreen transition-colors cursor-pointer">
                 <span className="font-bold text-xs">IG</span>
               </div>
             </div>
             <p className="text-xs opacity-60">
               &copy; {new Date().getFullYear()} {HOTEL_NAME}.<br/>All rights reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;