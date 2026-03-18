import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-[var(--sys-shape-corner-medium,8px)] font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:opacity-90",
    secondary: "bg-secondary text-on-secondary hover:opacity-90",
    outline: "border border-neutral text-on-neutral bg-transparent hover:bg-neutral-container",
  };

  const sizes = {
    sm: "px-4 py-2 text-label-sm",
    md: "px-6 py-3 text-label-md",
    lg: "px-8 py-4 text-label-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ fontFamily: 'var(--sys-font-label-label-large-font-family)' }}
      {...props}
    >
      {children}
    </button>
  );
};
