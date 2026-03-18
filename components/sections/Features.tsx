import React from 'react';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';

const features = [
  {
    title: "AI Behavior Tracking",
    description: "Track how users interact across your product in real time.",
    benefit: "See real behavior, not assumptions."
  },
  {
    title: "Smart Insights Engine",
    description: "AI detects patterns, intent, and friction points automatically.",
    benefit: "Understand why users behave the way they do."
  },
  {
    title: "Actionable Recommendations",
    description: "Get clear suggestions on what to improve and optimize.",
    benefit: "Move from insights to action instantly."
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "View live user activity and performance metrics.",
    benefit: "Make faster, data-driven decisions."
  },
  {
    title: "Session Replay & Heatmaps",
    description: "Visualize user journeys and interaction patterns.",
    benefit: "See exactly where users struggle or drop off."
  },
  {
    title: "Conversion Optimization Alerts",
    description: "Get notified when something impacts your conversion rate.",
    benefit: "Fix issues before they affect growth."
  },
  {
    title: "Tracking Health Monitor",
    description: "Ensure your data is accurate and reliable.",
    benefit: "Make decisions you can trust."
  },
  {
    title: "Privacy-First Analytics",
    description: "Built with user privacy and transparency in mind.",
    benefit: "Stay compliant while gaining insights."
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="features" background="surface" className="relative overflow-hidden py-32 shadow-[inset_0_32px_128px_-32px_rgba(0,0,0,0.05)]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10 rounded-full translate-x-1/2"></div>
      
      <div className="text-center mb-24 max-w-4xl mx-auto px-6">
        <Typography variant="label-lg" className="text-primary mb-6 font-black tracking-[0.3em] uppercase">Features</Typography>
        <Typography variant="display-sm" component="h2" className="mb-8 font-black leading-tight text-[48px] md:text-[64px]">
          Built for Modern <br /> Growth Teams
        </Typography>
        <Typography variant="body-lg" className="opacity-50 max-w-2xl mx-auto text-[20px]">
          Everything you need to explain your tool clearly, without complexity.
        </Typography>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className="group p-10 bg-white rounded-[56px] transition-all duration-500 shadow-[0_32px_96px_-16px_rgba(0,0,0,0.06)] hover:shadow-[0_48px_128px_-24px_rgba(0,0,0,0.12)] hover:-translate-y-4 h-full flex flex-col animate-float"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <div className="w-16 h-16 rounded-[24px] bg-primary/5 mb-8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 transform group-hover:scale-110">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={i % 2 === 0 ? "M13 10V3L4 14h7v7l9-11h-7z" : "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z"} />
               </svg>
            </div>
            <Typography variant="headline-sm" className="mb-4 font-black text-2xl tracking-tight leading-tight">{feature.title}</Typography>
            <Typography variant="body-md" className="text-on-neutral/60 mb-8 flex-1 leading-relaxed font-semibold">{feature.description}</Typography>
            <div className="pt-8 opacity-20 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-primary"></div>
                 <Typography variant="label-md" className="font-black text-[11px] text-primary uppercase tracking-widest">
                   Actionable Result
                 </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
