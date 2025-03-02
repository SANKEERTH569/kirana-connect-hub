
import React from 'react';

interface AnimatedLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = 'medium',
  className = '',
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20',
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-kirana-purple to-kirana-light-purple opacity-20 animate-pulse-gentle"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-3/4 h-3/4">
          {/* Logo inner circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-kirana-light-purple shadow-md animate-float"></div>
          {/* Letter K stylized */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg sm:text-xl md:text-2xl transform -translate-y-0.5">
              K
            </span>
          </div>
        </div>
      </div>
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
    </div>
  );
};

export default AnimatedLogo;
