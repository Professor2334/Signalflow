import React from 'react';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Ideal for MVPs wanting to launch fast with a clean, minimal setup.",
    features: ["Core features access", "Limited projects", "Standard support"]
  },
  {
    name: "Business",
    price: "$29",
    description: "Great for fast-growth teams needing added flexibility and reliability.",
    features: ["Custom solutions", "Dedicated manager", "Enhanced security", "API & integrations"],
    popular: true
  },
  {
    name: "Pro",
    price: "$79",
    description: "Made for teams who want complete control and dependable scaling.",
    features: ["Unlimited projects", "Priority support", "Advanced analytics", "Team collaboration"]
  }
];

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" background="neutral" className="pt-32 pb-32">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <Typography variant="label-lg" className="text-secondary mb-4 font-black tracking-[0.2em]">Pricing</Typography>
        <Typography variant="display-sm" component="h2" className="mb-6 font-black leading-tight">
          Simple pricing for growing teams
        </Typography>
        <Typography variant="body-lg" className="opacity-50">
          Start free and scale as your product grows.
        </Typography>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className={`p-12 rounded-[48px] relative flex flex-col h-full transition-all duration-500 hover:-translate-y-2 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:shadow-[0_64px_96px_-24px_rgba(0,0,0,0.1)] ${p.popular ? 'scale-105 z-10 shadow-[0_48px_96px_-24px_rgba(var(--color-primary-rgb),0.2)] relative' : ''}`}>
            {p.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-6 py-2 rounded-full text-[12px] font-black tracking-widest uppercase">
                MOST POPULAR
              </div>
            )}
            <div className="mb-10">
              <Typography variant="label-lg" className="font-black text-primary/40 mb-4 tracking-widest uppercase">{p.name}</Typography>
              <div className="flex items-baseline gap-1">
                 <span className="text-4xl font-black">$</span>
                 <Typography variant="display-md" component="span" className="font-black text-[56px] leading-none">{p.price.replace('$', '')}</Typography>
                 <Typography variant="body-md" className="opacity-40 font-bold ml-2">/ month</Typography>
              </div>
              <Typography variant="body-md" className="mt-6 text-on-neutral/50 font-bold leading-relaxed min-h-[72px]">{p.description}</Typography>
            </div>
            
            <div className="flex-1 space-y-5 mb-12">
               {p.features.map((f, j) => (
                 <div key={j} className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                       <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <Typography variant="body-md" className="font-bold text-on-neutral/70 leading-tight">{f}</Typography>
                 </div>
               ))}
            </div>

            <Button variant={p.popular ? 'primary' : 'secondary'} size="lg" className={`w-full rounded-2xl h-16 font-[900] text-lg tracking-tight ${p.popular ? 'shadow-xl shadow-primary/20' : 'bg-neutral-container/50 text-on-neutral hover:bg-neutral-container'}`}>
              Start free trial
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};
