
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = ({ icon, className = '', ...props }: InputProps) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors ${
          icon ? 'pl-9 pr-4 py-2' : 'px-4 py-2'
        } ${className}`}
        {...props}
      />
    </div>
  );
};