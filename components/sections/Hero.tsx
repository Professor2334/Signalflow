import React from 'react';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';

export const Hero: React.FC = () => {
  return (
    <Section className="text-center pt-24 pb-12 md:pt-36 md:pb-24 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 via-background to-background -z-10 opacity-30"></div>
      
      <div className="flex flex-col items-center max-w-6xl mx-auto px-6">
        {/* Scaled-up Landica-style Curved Text Arc */}
        <div className="mb-10 relative h-32 w-full max-w-[500px] flex items-center justify-center -translate-y-8 animate-spin-slow">
           <svg viewBox="0 0 400 400" className="w-full h-full p-2">
              <path id="curve" d="M 50,200 A 150,150 0 1,1 350,200 A 150,150 0 1,1 50,200" fill="transparent" />
              <text className="fill-primary text-[15px] font-black uppercase tracking-[0.4em]">
                 <textPath xlinkHref="#curve" startOffset="0%">
                    ✦ Accessible ✦ SEO-ready ✦ Responsive ✦ High Performance
                 </textPath>
              </text>
           </svg>
        </div>
        
        <Typography variant="display-lg" component="h1" className="mb-10 font-black tracking-tight leading-[1.05] text-[64px] md:text-[88px] max-w-4xl mx-auto">
          Understand what your <br /> users do <span className="text-primary italic">instantly!</span>
        </Typography>

        <Typography variant="body-lg" className="mb-10 text-on-neutral/60 max-w-2xl text-[18px] md:text-[20px] leading-relaxed">
          SignalFlow AI tracks real user behavior, detects patterns with AI, and tells you what to improve to increase conversion.
        </Typography>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Button variant="primary" size="lg" className="rounded-full px-10 h-16 text-[18px] font-black shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
            Start free trial
          </Button>
          <Button variant="secondary" size="lg" className="rounded-full px-10 h-16 text-[18px] font-black hover:scale-105 transition-transform">
            See how it works
          </Button>
        </div>

        {/* High-Fidelity Landica-Inspired Dashboard Image */}
        <div className="w-full relative group">
          <div className="bg-[#0A0A0A] rounded-[40px] p-1 shadow-[0_48px_96px_-24px_rgba(0,0,0,0.5)] overflow-hidden">
            <img 
              src="https://framerusercontent.com/images/QnoZnbn7uum0wKgcFyBeqsmqNr4.jpg?width=2400" 
              alt="SignalFlow AI Dashboard"
              className="w-full h-auto rounded-[38px]"
            />
          </div>
          {/* Enhanced Glass Effect Accents */}
          <div className="absolute -top-40 -left-60 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -z-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -right-60 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] -z-10"></div>
        </div>
      </div>
    </Section>
  );
};
