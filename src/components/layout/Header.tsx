
import React from 'react';
import AnimatedLogo from '@/components/ui/AnimatedLogo';
import HotelIdBadge from '@/components/common/HotelIdBadge';
import { cn } from '@/lib/utils';

interface HeaderProps {
  hotelId?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ hotelId, className }) => {
  return (
    <header className={cn('flex items-center justify-between py-4', className)}>
      <AnimatedLogo size="small" />
      <h1 className="text-xl font-semibold text-center bg-gradient-to-r from-primary to-kirana-purple bg-clip-text text-transparent">
        My Kirana
      </h1>
      {hotelId && <HotelIdBadge hotelId={hotelId} />}
    </header>
  );
};

export default Header;
