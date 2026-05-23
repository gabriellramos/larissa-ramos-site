import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', hoverLift = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-surface-container rounded-2xl border border-white/50 shadow-[0_4px_24px_rgba(67,102,82,0.06)] overflow-hidden ${
          hoverLift ? 'transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(67,102,82,0.12)]' : ''
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
