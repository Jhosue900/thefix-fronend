import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ children, variant, className = '' }: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-lg font-medium transition-colors";
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700",
    secondary: "bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;