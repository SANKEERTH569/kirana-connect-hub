
import React from 'react';
import { ShoppingCart, User, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-all duration-300',
        active
          ? 'text-primary'
          : 'text-muted-foreground hover:text-foreground'
      )}
    >
      <Icon size={24} className={cn(active ? 'animate-scale-in' : '')} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
};

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState('home');

  return (
    <div className={cn('glass-morphism rounded-full p-1 flex items-center justify-center', className)}>
      <NavItem
        icon={MessageCircle}
        label="Chat"
        active={activeTab === 'chat'}
        onClick={() => setActiveTab('chat')}
      />
      <NavItem
        icon={ShoppingCart}
        label="Orders"
        active={activeTab === 'orders'}
        onClick={() => setActiveTab('orders')}
      />
      <NavItem
        icon={User}
        label="Profile"
        active={activeTab === 'profile'}
        onClick={() => setActiveTab('profile')}
      />
    </div>
  );
};

export default Navigation;
