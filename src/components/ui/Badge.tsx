import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'outline' | 'glass';
}

export const Badge = ({ className = '', variant = 'primary', children, ...props }: BadgeProps) => {
  const baseStyles = 'inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors';
  
  const variants = {
    primary: 'bg-primary-container text-primary',
    outline: 'border border-outline text-surface-text-variant',
    glass: 'backdrop-blur-md bg-white/60 border border-white/40 text-primary shadow-sm',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};
