import React from 'react';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';

export const FinalCTA: React.FC = () => {
  return (
    <Section background="neutral" className="pb-32 pt-10">
      <div className="max-w-7xl mx-auto px-6">
         <div className="bg-black text-white p-20 rounded-[56px] text-center relative overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/30 to-transparent opacity-40 -z-10"></div>
            <Typography variant="display-md" className="mb-10 font-[900] leading-[1.05] text-[64px] md:text-[80px] tracking-tighter text-white">
               Ready to grow <br /> <span className="text-primary italic">without guessing?</span>
            </Typography>
            <Typography variant="body-lg" className="text-white/60 mb-14 max-w-2xl mx-auto text-[24px] font-bold leading-relaxed">
               Join hundreds of product teams using SignalFlow AI to understand behavior and drive measurable growth instantly.
            </Typography>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="bg-white text-black rounded-full px-12 h-20 font-[900] text-xl hover:bg-white/90 transition-all shadow-2xl shadow-white/10 active:scale-95">
                  Start your free trial
               </button>
               <div className="text-left">
                  <Typography variant="body-md" className="text-white/40 font-bold uppercase tracking-widest text-[11px] leading-tight">
                     No long-term contracts. <br /> Cancel anytime.
                  </Typography>
               </div>
            </div>
         </div>
      </div>
    </Section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24 mb-24">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary font-black uppercase tracking-tighter text-lg">S</div>
                <Typography variant="headline-sm" className="font-black tracking-tighter text-2xl">SignalFlow AI</Typography>
             </div>
             <Typography variant="body-md" className="text-on-neutral/40 leading-relaxed font-bold">
               Decision intelligence <br /> powered by behavior.
             </Typography>
          </div>
          
          <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-12">
             <div className="space-y-6">
                <Typography variant="label-lg" className="text-on-neutral font-black uppercase tracking-widest text-[12px]">Product</Typography>
                <ul className="space-y-4">
                  {['Features', 'How it works', 'Smart Insights', 'Case Studies'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-on-neutral/40 hover:text-primary font-bold transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
             </div>
             <div className="space-y-6">
                <Typography variant="label-lg" className="text-on-neutral font-black uppercase tracking-widest text-[12px]">Company</Typography>
                <ul className="space-y-4">
                  {['About', 'Careers', 'Privacy Policy', 'Terms of Service'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-on-neutral/40 hover:text-primary font-bold transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          <div className="col-span-1">
             <Typography variant="label-lg" className="text-on-neutral font-black uppercase tracking-widest text-[12px] mb-8">Newsletter</Typography>
             <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="bg-neutral-container/20 border border-outline/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all font-bold"
                />
                <Button variant="primary" size="md" className="rounded-2xl h-14 font-black">Subscribe</Button>
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-outline/5 gap-8">
          <Typography variant="body-sm" className="opacity-30 font-bold">
            &copy; {new Date().getFullYear()} SignalFlow AI. All rights reserved.
          </Typography>
          <div className="flex gap-10 opacity-30">
             {['Twitter', 'LinkedIn', 'YouTube'].map(s => (
               <a key={s} href="#" className="hover:opacity-100 transition-opacity font-bold uppercase tracking-tighter text-xs">{s}</a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
