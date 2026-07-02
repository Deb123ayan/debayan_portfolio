import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'surface' | 'ink' | 'canvas' | 'accent';
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'surface', 
  rounded = 'md',
  className = '', 
  ...props 
}) => {
  return (
    <div 
      className={`card bg-${variant} rounded-${rounded} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
