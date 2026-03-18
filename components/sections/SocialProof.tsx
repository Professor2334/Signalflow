import React from 'react';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';

export const SocialProof: React.FC = () => {
  return (
    <Section className="py-20 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center px-4 mb-20">
        <Typography variant="label-md" className="opacity-80 uppercase tracking-[0.4em] font-black text-center text-primary">
          Trusted by fast-growing product teams
        </Typography>
      </div>
        
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex gap-24 items-center shrink-0 min-w-full">
           {[...Array(3)].map((_, i) => (
             <React.Fragment key={i}>
               {['GlobalTech', 'Solutions', 'SmartAI', 'NextLevel', 'CloudFlow'].map(logo => (
                 <div key={`${i}-${logo}`} className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0 shrink-0">
                    <div className="w-10 h-10 bg-on-neutral/80 rounded-lg shadow-lg"></div>
                    <Typography variant="headline-sm" className="font-black text-2xl tracking-tighter">{logo}</Typography>
                 </div>
               ))}
             </React.Fragment>
           ))}
        </div>
      </div>
    </Section>
  );
};
