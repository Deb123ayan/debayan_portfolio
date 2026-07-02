import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'ink' | 'surface' | 'accent';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'ink', className = '' }) => {
  return (
    <div className={`badge badge-${variant} ${className}`}>
      {children}
    </div>
  );
};
