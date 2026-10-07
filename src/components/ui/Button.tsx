import React from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: string;
  href?: string;
  asAnchor?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon, 
  href, 
  asAnchor,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-bold text-sm rounded-xl shadow-md transition-colors duration-200 text-center";
  
  const variants = {
    primary: "bg-brand-sky text-white shadow-brand-sky/25 hover:bg-sky-600 hover:shadow-lg hover:shadow-brand-sky/40",
    secondary: "bg-brand-navy text-white shadow-brand-navy/20 hover:bg-brand-navyLight hover:shadow-brand-navy/30",
    outline: "bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50",
  };

  const classes = `${baseClasses} px-5 py-2.5 ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  if (asAnchor && href) {
    return (
      <motion.a href={href} className={classes} {...motionProps as any}>
        {icon && <i className={`fa-solid ${icon}`}></i>}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...(props as any)} {...motionProps}>
      {icon && <i className={`fa-solid ${icon}`}></i>}
      <span>{children}</span>
    </motion.button>
  );
};
