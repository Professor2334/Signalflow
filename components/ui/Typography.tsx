import React from 'react';

type TypographyVariant = 
  | 'display-lg' | 'display-md' | 'display-sm' 
  | 'headline-lg' | 'headline-md' | 'headline-sm'
  | 'body-lg' | 'body-md' | 'body-sm'
  | 'label-lg' | 'label-md' | 'label-sm';

interface TypographyProps {
  variant: TypographyVariant;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant, 
  component, 
  children, 
  className = '',
  style 
}) => {
  const Component = component || (variant.startsWith('display') || variant.startsWith('headline') ? 'h2' : 'p');

  const variantStyles: Record<TypographyVariant, string> = {
    'display-lg': 'text-display-lg font-display tracking-tight leading-tight',
    'display-md': 'text-display-md font-display tracking-tight leading-tight',
    'display-sm': 'text-display-sm font-display tracking-tight leading-snug',
    'headline-lg': 'text-headline-lg font-headline font-semibold',
    'headline-md': 'text-headline-md font-headline font-semibold',
    'headline-sm': 'text-headline-sm font-headline font-medium',
    'body-lg': 'text-body-lg font-body',
    'body-md': 'text-body-md font-body',
    'body-sm': 'text-body-sm font-body',
    'label-lg': 'text-label-lg font-body font-semibold uppercase tracking-wider',
    'label-md': 'text-label-md font-body font-medium',
    'label-sm': 'text-label-sm font-body font-medium',
  };

  return (
    <Component 
      className={`${variantStyles[variant]} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};
