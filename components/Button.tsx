import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon, 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300 font-sans tracking-wide text-sm font-medium focus:outline-none disabled:opacity-50";
  
  const variants = {
    // Primary: Now uses secondaryStrong for higher conversion/contrast
    primary: "bg-lux-secondaryStrong text-white hover:bg-lux-secondary shadow-soft hover:shadow-lg transform hover:-translate-y-0.5",
    // Secondary: Elegant Deep Earth Brown
    secondary: "bg-lux-primary text-white hover:bg-lux-secondaryStrong shadow-soft",
    // Outline: Uses standard secondary for borders
    outline: "border border-lux-secondary text-lux-secondary hover:bg-lux-secondary hover:text-white bg-transparent",
    // Text: Subtle interaction
    text: "text-lux-primary underline decoration-lux-secondary decoration-1 underline-offset-4 hover:text-lux-secondary bg-transparent shadow-none px-0 py-1",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;