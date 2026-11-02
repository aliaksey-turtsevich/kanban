
import type { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

export const Badge = ({
  children,
  variant = 'default',
  className = '',
  ...props
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium';

  const variants = {
    default: 'bg-slate-800 text-slate-300 border border-slate-700',
    primary: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    danger: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};