import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-bg-card border border-border-color rounded-xl overflow-hidden transition-all duration-300 hover:border-accent-primary/50 hover:shadow-[0_0_30px_rgba(108,99,255,0.15)] hover:-translate-y-1',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';
