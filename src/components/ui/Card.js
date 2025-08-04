import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-xl border transition-all duration-200';
  
  const variants = {
    default: 'bg-white border-secondary-200 shadow-sm',
    elevated: 'bg-white border-secondary-200 shadow-lg',
    outlined: 'bg-white border-secondary-300 shadow-none',
    ghost: 'bg-transparent border-transparent shadow-none',
    gradient: 'bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200 shadow-sm'
  };
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  const hoverEffect = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverEffect} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Card sub-components
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);
Card.Header.displayName = 'Card.Header';

Card.Body = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);
Card.Body.displayName = 'Card.Body';

Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`mt-4 pt-4 border-t border-secondary-200 ${className}`} {...props}>
    {children}
  </div>
);
Card.Footer.displayName = 'Card.Footer';

Card.Title = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-semibold text-secondary-900 mb-2 ${className}`} {...props}>
    {children}
  </h3>
);
Card.Title.displayName = 'Card.Title';

Card.Description = ({ children, className = '', ...props }) => (
  <p className={`text-secondary-600 ${className}`} {...props}>
    {children}
  </p>
);
Card.Description.displayName = 'Card.Description';

export default Card;