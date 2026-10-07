import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
        {label}
      </label>
      <input 
        id={id}
        className={`w-full text-sm rounded-xl border-slate-200 focus:border-brand-sky focus:ring-brand-sky px-3 py-2.5 ${className}`} 
        {...props} 
      />
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, id, options, className = '', ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
        {label}
      </label>
      <select 
        id={id}
        className={`w-full text-sm rounded-xl border-slate-200 focus:border-brand-sky focus:ring-brand-sky px-3 py-2.5 text-slate-700 ${className}`} 
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};
