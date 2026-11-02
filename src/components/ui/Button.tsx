
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dashed' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none cursor-pointer';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white',
    secondary: 'bg-slate-700/60 hover:bg-slate-700 text-slate-200 border border-slate-600',
    dashed: 'bg-slate-800/40 hover:bg-slate-800 border border-dashed border-slate-700 text-slate-400 hover:text-slate-200',
    ghost: 'hover:bg-slate-700/50 text-slate-400 hover:text-slate-200',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-1 gap-1',
    md: 'text-sm px-3.5 py-2 gap-2',
    lg: 'text-base px-4 py-2.5 gap-2',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};