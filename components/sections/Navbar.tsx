"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 pointer-events-none">
      <div className="bg-black/95 text-white rounded-full lg:px-12 px-6 h-18 flex items-center justify-between shadow-[0_32px_128px_-16px_rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-3xl pointer-events-auto min-h-[72px] lg:min-h-0 relative">
        {/* Logo - Compressed Left */}
        <div className="flex flex-1 items-center gap-2 group cursor-pointer h-full lg:pl-0 pl-[0.6rem]">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-black text-sm hover:rotate-6 transition-transform shadow-lg shadow-white/5">S</div>
          <Typography variant="label-lg" className="font-black tracking-tighter text-white leading-none whitespace-nowrap">SignalFlow</Typography>
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <div className="lg:hidden flex items-center justify-end flex-1">
          <button 
            className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Links - Hidden on mobile unless menu is open, flex on desktop */}
        <div className={`${isMobileMenuOpen ? 'flex absolute top-20 left-0 right-0 bg-black/95 rounded-2xl flex-col p-6 border border-white/10 shadow-2xl' : 'hidden lg:flex'} flex-col lg:flex-row items-center gap-6 lg:gap-10 flex-col lg:flex-row flex-1 justify-center transition-all`}>
           {['Features', 'How it works', 'Pricing'].map(item => (
             <a 
               key={item} 
               href={`#${item.toLowerCase()}`} 
               className="text-white/40 hover:text-white font-black text-[11px] uppercase tracking-[0.25em] transition-all hover:scale-105 whitespace-nowrap"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               {item}
             </a>
           ))}

           {/* Actions - Mobile view inside menu */}
           <div className="flex lg:hidden w-full mt-4">
             <button className="bg-white text-black rounded-full w-full py-3 flex items-center justify-center font-semibold text-label-lg uppercase tracking-widest hover:bg-[#f2f2f2] transition-all shadow-xl active:scale-95 whitespace-nowrap">
               Get Started
             </button>
           </div>
        </div>

        {/* Actions - Desktop view compressed right */}
        <div className="hidden lg:flex flex-1 items-center justify-end">
          <button className="bg-white text-black rounded-full px-8 py-3 flex items-center justify-center font-semibold text-label-lg uppercase tracking-widest hover:bg-[#f2f2f2] transition-all shadow-xl active:scale-95 whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
