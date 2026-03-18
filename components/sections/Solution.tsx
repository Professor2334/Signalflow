import React from 'react';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';

export const Solution: React.FC = () => {
  return (
    <Section id="solution" className="overflow-hidden py-32 bg-background relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 blur-[120px] -z-10 rounded-full translate-y-1/2"></div>
      
      <div className="flex flex-col lg:flex-row gap-24 items-center max-w-7xl mx-auto">
        <div className="flex-1 order-2 lg:order-1 relative group w-full">
            <div className="bg-neutral-container/30 rounded-[48px] p-2 shadow-2xl relative overflow-hidden backdrop-blur-sm">
               <div className="bg-white rounded-[40px] p-12 aspect-[1.1] flex items-center justify-center relative overflow-hidden">
                  {/* Visual representation of "Insight" */}
                  <div className="w-full space-y-8 relative z-10">
                     <div className="flex gap-6 items-center">
                        <div className="w-16 h-16 rounded-[20px] bg-primary/10 flex items-center justify-center text-primary font-black text-xl">1</div>
                        <div className="flex-1 space-y-3 py-1">
                           <div className="w-3/4 h-3 bg-primary/20 rounded-full"></div>
                           <div className="w-full h-3 bg-primary/5 rounded-full"></div>
                        </div>
                     </div>
                     <div className="flex gap-6 items-center">
                        <div className="w-16 h-16 rounded-[20px] bg-secondary/10 flex items-center justify-center text-secondary font-black text-xl">2</div>
                        <div className="flex-1 space-y-3 py-1">
                           <div className="w-full h-3 bg-secondary/20 rounded-full"></div>
                           <div className="w-2/3 h-3 bg-secondary/5 rounded-full"></div>
                        </div>
                     </div>
                     <div className="mt-12 p-8 bg-primary rounded-[32px] shadow-[0_32px_64px_-16px_rgba(var(--color-primary-rgb),0.3)] transform hover:scale-105 transition-transform duration-500 cursor-default">
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                              <span className="animate-pulse">✨</span>
                           </div>
                           <Typography variant="label-md" className="text-white font-black tracking-widest uppercase">Smart Insight</Typography>
                        </div>
                        <Typography variant="headline-sm" className="text-white font-black mb-2 text-2xl">Drop-off Pattern Detected</Typography>
                        <Typography variant="body-md" className="text-white/80 font-bold italic leading-relaxed">
                          "82% of users quit after Step 2. Removing the 'Phone' field will likely increase conversion by 12.4%."
                        </Typography>
                     </div>
                  </div>
                  {/* Decorative background circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full -z-10 animate-spin-slow"></div>
               </div>
            </div>
        </div>
        
        <div className="flex-1 order-1 lg:order-2">
           <Typography variant="label-lg" className="text-primary mb-6 font-black tracking-[0.2em] uppercase">The Solution</Typography>
           <Typography variant="display-sm" component="h2" className="mb-8 font-black leading-[1.2] text-[56px]">
             Turn user behavior <br /> 
             <span className="text-primary">into clear decisions</span>
           </Typography>
           <Typography variant="body-lg" className="text-on-neutral/60 mb-10 text-[20px] leading-relaxed max-w-lg">
             SignalFlow AI goes beyond traditional analytics by analyzing how users interact with your product and translating it into clear, actionable insights.
           </Typography>
           
           <div className="space-y-10">
              <Typography variant="headline-sm" className="font-black text-on-neutral flex items-center gap-4">
                <span className="w-8 h-1 bg-secondary rounded-full"></span>
                Finally know:
              </Typography>
              <div className="grid gap-6">
                {["Why it happened", "What it means", "What to do next"].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center group">
                    <div className="w-12 h-12 rounded-2xl bg-neutral/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <Typography variant="body-lg" className="font-black text-xl tracking-tight">{item}</Typography>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};
