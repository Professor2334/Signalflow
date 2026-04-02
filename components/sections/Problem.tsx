import React from 'react';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';

export const Problem: React.FC = () => {
  return (
    <Section id="problem" background="neutral" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-400/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
        <div>
            <Typography variant="label-lg" className="text-secondary mb-6 font-black tracking-[0.2em] uppercase">The Pain Point</Typography>
            <Typography variant="display-sm" component="h2" className="mb-8 font-black leading-tight">
              You are collecting data <br /> 
              <span className="opacity-30">but still guessing</span>
            </Typography>
            <Typography variant="body-lg" className="text-on-neutral/60 mb-8 leading-relaxed">
              Data alone does not drive growth. <br />
              <strong>Understanding behavior does.</strong>
            </Typography>
        </div>
        
        <div className="space-y-6">
            {[
              "You see the numbers but not the reasons behind them",
              "Users drop off and you don’t know why",
              "Dashboards show trends but not what to fix",
              "Decisions take too long and rely on assumptions"
            ].map((point, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] flex gap-6 items-center transition-all duration-500 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_48px_96px_-24px_rgba(0,0,0,0.12)] hover:-translate-x-2">
                 <div className="w-10 h-10 rounded-xl bg-red-400/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                 </div>
                 <Typography variant="body-lg" className="font-bold text-on-neutral/80">
                   {point}
                 </Typography>
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
};
