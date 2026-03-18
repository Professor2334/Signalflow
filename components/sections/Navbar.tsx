import React from 'react';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 pointer-events-none">
      <div className="bg-black/95 text-white rounded-full px-12 h-18 flex items-center justify-between shadow-[0_32px_128px_-16px_rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-3xl pointer-events-auto">
        {/* Logo - Compressed Left */}
        <div className="flex-1 flex items-center gap-2 group cursor-pointer h-full">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-black text-sm hover:rotate-6 transition-transform shadow-lg shadow-white/5">S</div>
          <Typography variant="label-lg" className="font-black tracking-tighter text-[14px] text-white leading-none whitespace-nowrap">SignalFlow</Typography>
        </div>

        {/* Links - Absolute Center */}
        <div className="hidden lg:flex items-center gap-10 flex-1 justify-center">
           {['Features', 'How it works', 'Pricing'].map(item => (
             <a key={item} href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-white font-black text-[11px] uppercase tracking-[0.25em] transition-all hover:scale-105 whitespace-nowrap">{item}</a>
           ))}
        </div>

        {/* Actions - Compressed Right (No Burger) */}
        <div className="flex-1 flex items-center justify-end">
          <button className="bg-white text-black rounded-full px-8 h-10 items-center justify-center font-semibold text-[14px] uppercase tracking-widest hover:bg-[#f2f2f2] transition-all shadow-xl active:scale-95 whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
