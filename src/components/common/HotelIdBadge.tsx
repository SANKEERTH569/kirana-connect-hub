
import React from 'react';

interface HotelIdBadgeProps {
  hotelId: string;
  variant?: 'default' | 'large';
  className?: string;
}

const HotelIdBadge: React.FC<HotelIdBadgeProps> = ({
  hotelId,
  variant = 'default',
  className = '',
}) => {
  return (
    <div
      className={`
        inline-flex items-center justify-center 
        ${variant === 'large' ? 'py-2 px-4 text-base' : 'py-1 px-3 text-sm'} 
        font-medium tracking-wide rounded-full 
        bg-kirana-blue text-primary 
        shadow-soft backdrop-blur-sm border border-white/20
        transition-all duration-300 hover:shadow-glass-hover
        ${className}
      `}
    >
      <span className="font-semibold">{hotelId}</span>
    </div>
  );
};

export default HotelIdBadge;
