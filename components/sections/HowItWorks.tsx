import React from 'react';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';

const steps = [
  {
    num: "1",
    title: "Track user actions across your product",
    description: "Install our lightweight SDK and start capturing behavioral data instantly."
  },
  {
    num: "2",
    title: "AI analyzes behavior and detects patterns",
    description: "Our Smart Insights engine identifies friction points and user intent automatically."
  },
  {
    num: "3",
    title: "Receive insights and recommendations",
    description: "Get actionable advice to improve performance and drive measurable growth."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" background="neutral" className="py-32 relative">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <Typography variant="label-lg" className="text-primary mb-6 font-black tracking-[0.3em] uppercase">The Process</Typography>
        <Typography variant="display-sm" component="h2" className="mb-6 font-black leading-tight">
          Three steps to <br /> total behavioral clarity
        </Typography>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {[
          { 
            num: "01", 
            title: "Input", 
            desc: "Users add text, files, or data effortlessly in one place.",
            glow: "from-blue-600/20",
            mockup: (
              <div className="w-full flex flex-col gap-3 p-5 bg-[#0D0D0D] rounded-2xl border border-white/5 shadow-2xl">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-2 bg-white/10 rounded"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                 </div>
                 <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4">
                    <span className="text-[10px] text-white/30 italic">Add your data here...</span>
                 </div>
                 <div className="flex gap-2">
                    <div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-[9px] text-white/40 flex items-center gap-2">
                       <div className="w-2 h-2 rounded bg-white/20"></div> Attach
                    </div>
                    <div className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-[9px] text-white/40 flex items-center gap-2">
                       <div className="w-2 h-2 rounded bg-white/20"></div> Import
                    </div>
                 </div>
              </div>
            )
          },
          { 
            num: "02", 
            title: "Processing", 
            desc: "Your AI analyzes, generates or automates the task.",
            glow: "from-purple-600/30",
            mockup: (
              <div className="w-full h-full flex items-center justify-center">
                 <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-purple-500/20 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.6)] flex items-center justify-center">
                          <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                       </div>
                    </div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center w-32">
                       <Typography variant="label-md" className="text-white/60 font-black tracking-widest uppercase text-[0.5625rem] mb-1">Analyzing...</Typography>
                       <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-2/3 h-full bg-purple-500"></div>
                       </div>
                    </div>
                 </div>
              </div>
            )
          },
          { 
            num: "03", 
            title: "Output", 
            desc: "Clear, clean, actionable results appear instantly.",
            glow: "from-green-600/30",
            mockup: (
              <div className="w-full p-5 bg-[#0D0D0D] rounded-2xl border border-white/5 shadow-2xl">
                 <div className="flex justify-between items-center mb-6">
                    <div className="w-24 h-2 bg-white/10 rounded"></div>
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between items-end gap-2 h-20">
                       <div className="w-full bg-green-500/20 rounded-t h-[40%]"></div>
                       <div className="w-full bg-green-500/40 rounded-t h-[70%]"></div>
                       <div className="w-full bg-green-500/60 rounded-t h-[50%]"></div>
                       <div className="w-full bg-green-500 rounded-t h-[90%] shadow-[0_0_20px_rgba(34,197,94,0.3)]"></div>
                    </div>
                 </div>
              </div>
            )
          }
        ].map((step, i) => (
          <div key={i} className="group p-10 bg-white rounded-[56px] shadow-[0_32px_96px_-16px_rgba(0,0,0,0.06)] flex flex-col h-full transition-all duration-500 hover:shadow-[0_48px_128px_-24px_rgba(0,0,0,0.1)] hover:-translate-y-2 overflow-hidden">
            <Typography variant="display-sm" className="mb-4 font-[900] tracking-tighter">
              <span className="text-on-neutral/20">{step.num}. </span>{step.title}
            </Typography>
            <Typography variant="body-lg" className="text-on-neutral/60 mb-10 font-bold leading-relaxed">{step.desc}</Typography>
            
            <div className="mt-auto relative rounded-[40px] bg-black p-8 h-80 overflow-hidden flex flex-col justify-center items-center shadow-inner">
               <div className={`absolute inset-0 bg-gradient-to-t ${step.glow} to-black/0 opacity-40`}></div>
               <div className="relative z-10 w-full flex items-center justify-center">
                  {step.mockup}
               </div>
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <Typography variant="label-md" className="text-white/20 font-black tracking-widest uppercase text-[0.5625rem]">SignalFlow Logic Core</Typography>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
