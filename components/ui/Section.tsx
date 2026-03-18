import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
  background?: 'default' | 'neutral' | 'surface';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  containerClassName = '',
  background = 'default'
}) => {
  const bgStyles = {
    default: "bg-background",
    neutral: "bg-neutral-container",
    surface: "bg-surface",
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-6 md:px-12 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
