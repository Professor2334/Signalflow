import React from 'react';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';

const benefits = [
  "Identify friction points instantly",
  "Improve conversion rates with confidence",
  "Reduce guesswork in product decisions",
  "Align your team around real user behavior",
  "Turn insights into measurable growth"
];

export const Benefits: React.FC = () => {
  return (
    <Section id="benefits" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 blur-[120px] -z-10 rounded-full translate-x-1/2"></div>
      
      <div className="flex flex-col lg:flex-row gap-24 items-center max-w-7xl mx-auto px-6 mb-24">
        <div className="flex-1">
           <Typography variant="label-lg" className="text-secondary mb-6 font-black tracking-[0.2em] uppercase text-center lg:text-left">The Impact</Typography>
           <Typography variant="display-sm" component="h2" className="mb-8 font-black leading-tight text-center lg:text-left">
             Make smarter decisions. <br /> 
             <span className="text-secondary">Grow faster.</span>
           </Typography>
           <Typography variant="body-lg" className="text-on-neutral/60 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
             SignalFlow AI turns your behavioral data into a competitive advantage by aligning your product decisions with actual user needs.
           </Typography>
        </div>
      </div>

      <div className="relative flex overflow-hidden py-10">
        <div className="animate-marquee flex gap-8">
          {[...benefits, ...benefits, ...benefits].map((benefit, i) => (
            <div key={i} className="group flex gap-6 items-center p-10 bg-white rounded-[40px] shadow-[0_32px_96px_-16px_rgba(0,0,0,0.06)] hover:shadow-[0_48px_128px_-24px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 whitespace-nowrap shrink-0">
               <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-500 shadow-xl">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
               </div>
               <Typography variant="body-lg" className="font-[900] tracking-tight text-on-neutral/80 group-hover:text-on-neutral transition-colors">{benefit}</Typography>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
