import React from 'react';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';

const testimonials = [
  {
    quote: "SignalFlow AI helped us identify exactly where users were dropping off. We increased our conversion rate within weeks.",
    author: "Growth Lead @ GlobalTech"
  },
  {
    quote: "Instead of guessing what to fix, we now have clear recommendations backed by real data.",
    author: "Product Manager @ Solutions"
  },
  {
    quote: "This is not just analytics. It actually tells you what to do next.",
    author: "Founder @ SmartAI"
  }
];

export const Testimonials: React.FC = () => {
  // Triple the list to ensure the marquee fills the screen and loops smoothly
  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <Section id="testimonials" background="neutral" className="py-32 overflow-hidden">
      <div className="text-center mb-24 max-w-3xl mx-auto px-6">
        <Typography variant="label-lg" className="text-primary mb-6 font-black tracking-[0.3em] uppercase">Testimonials</Typography>
        <Typography variant="display-sm" component="h2" className="mb-8 font-black leading-tight">
          What Early Users Say
        </Typography>
        <Typography variant="body-lg" className="opacity-50 max-w-2xl mx-auto">
          Detailed feedback from founders who turned their product into a successful, seamless, and confident launch.
        </Typography>
      </div>
      
      <div className="relative flex overflow-hidden py-10 pointer-events-none">
        <div className="animate-marquee flex gap-12 pointer-events-auto">
          {doubledTestimonials.map((t, i) => (
            <div key={i} className="w-[380px] p-10 bg-white rounded-[48px] flex flex-col shadow-[0_24px_64px_-16px_rgba(0,0,0,0.06)] relative group shrink-0 transition-all duration-500 hover:shadow-[0_48px_96px_-24px_rgba(0,0,0,0.12)] hover:-translate-y-2">
              <div className="flex-1">
                 {/* Landica Big Quote Icon */}
                 <div className="text-[#5e2ae3] mb-6">
                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                       <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM4.017 21L4.017 18C4.017 16.8954 4.9124 16 6.017 16H9.017C10.1216 16 11.017 16.8954 11.017 18V21C11.017 22.1046 10.1216 23 9.017 23H6.017C4.9124 23 4.017 22.1046 4.017 21ZM14.017 11V8C14.017 4.13401 17.151 1 21.017 1V4C18.2556 4 16.017 6.23858 16.017 9V11H14.017ZM4.017 11V8C4.017 4.13401 7.151 1 11.017 1V4C8.25558 4 6.017 6.23858 6.017 9V11H4.017Z" />
                    </svg>
                 </div>
                 <Typography variant="headline-sm" className="text-on-neutral font-[800] leading-snug tracking-tight mb-10">
                   "{t.quote}"
                 </Typography>
              </div>

              <div className="flex items-center justify-between pt-8">
                <div>
                    <Typography variant="headline-sm" className="font-black text-on-neutral tracking-tight">{t.author.split('@')[0]}</Typography>
                    <Typography variant="body-md" className="opacity-40 font-bold uppercase tracking-widest mt-1">{t.author.split('@')[1]}</Typography>
                </div>
                {/* Real Avatar Image */}
                <div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-container border-2 border-white shadow-lg">
                   <img 
                      src={`https://i.pravatar.cc/150?u=${t.author.split('@')[0].toLowerCase()}`} 
                      alt={t.author}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-60 bg-gradient-to-r from-neutral via-neutral/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-60 bg-gradient-to-l from-neutral via-neutral/50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </Section>
  );
};
