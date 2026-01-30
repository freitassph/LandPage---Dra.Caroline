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
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-500 ease-luxury font-sans tracking-wide text-sm font-medium focus:outline-none disabled:opacity-50 select-none group";
  
  const variants = {
    // Primary: Added Shimmer Effect container in JSX
    primary: "bg-lux-secondaryStrong text-white hover:bg-lux-secondary shadow-soft hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-md",
    // Secondary: Elegant Deep Earth Brown
    secondary: "bg-lux-primary text-white hover:bg-lux-secondaryStrong shadow-soft active:shadow-sm",
    // Outline: Uses standard secondary for borders
    outline: "border border-lux-secondary text-lux-secondary hover:bg-lux-secondary hover:text-white bg-transparent active:bg-lux-secondaryStrong",
    // Text: Subtle interaction
    text: "text-lux-primary underline decoration-lux-secondary decoration-1 underline-offset-4 hover:text-lux-secondary bg-transparent shadow-none px-0 py-1",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {/* Shimmer Effect for Primary Buttons */}
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      )}
      
      <span className="relative z-20 flex items-center justify-center w-full">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

export default Button;