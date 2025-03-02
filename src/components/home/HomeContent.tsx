
import React, { useRef } from 'react';
import { useElementOnScreen, useStaggeredAnimation } from '@/utils/animation';
import StatusChip from '../common/StatusChip';

interface HomeContentProps {
  isRegistered: boolean;
}

const UnregisteredContent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [setRef, isVisible] = useElementOnScreen({ threshold: 0.1 });

  // Use both refs
  const setRefs = (el: HTMLDivElement | null) => {
    if (el) {
      // Save to the ref object
      ref.current = el;
      // Pass to the intersection observer
      setRef(el);
    }
  };

  const staggerDelays = useStaggeredAnimation(3, 100, 100);

  return (
    <div ref={setRefs} className="flex flex-col items-center justify-center py-8">
      <div className={`glass-panel w-full max-w-md mx-auto text-center mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${staggerDelays[0]}ms` }}>
        <StatusChip status="pending" className="mb-4" />
        <h2 className="text-xl font-semibold mb-3">Registration Pending</h2>
        <p className="text-muted-foreground text-sm">
          Your account is currently awaiting admin approval. Once approved, you'll be able to access all features.
        </p>
      </div>
      
      <div className={`glass-panel w-full max-w-md mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${staggerDelays[1]}ms` }}>
        <h3 className="text-lg font-medium mb-3">What to expect?</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start">
            <span className="h-5 w-5 rounded-full bg-kirana-purple text-white flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
            <span>Admin will review your registration</span>
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 rounded-full bg-kirana-purple text-white flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
            <span>You'll receive a notification once approved</span>
          </li>
          <li className="flex items-start">
            <span className="h-5 w-5 rounded-full bg-kirana-purple text-white flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
            <span>Access your personalized grocery list and start ordering</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const RegisteredContent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [setRef, isVisible] = useElementOnScreen({ threshold: 0.1 });
  
  // Use both refs
  const setRefs = (el: HTMLDivElement | null) => {
    if (el) {
      // Save to the ref object
      ref.current = el;
      // Pass to the intersection observer
      setRef(el);
    }
  };
  
  const staggerDelays = useStaggeredAnimation(4, 100, 100);

  const demoGroceryItems = [
    { id: 1, name: 'Tomatoes', quantity: '1 kg', price: '₹40' },
    { id: 2, name: 'Onions', quantity: '2 kg', price: '₹50' },
    { id: 3, name: 'Potatoes', quantity: '3 kg', price: '₹60' },
    { id: 4, name: 'Rice', quantity: '5 kg', price: '₹250' },
  ];

  return (
    <div ref={setRefs} className="flex flex-col items-center justify-center py-8">
      <div className={`glass-panel w-full max-w-md mx-auto mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${staggerDelays[0]}ms` }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Grocery List</h2>
          <StatusChip status="approved" />
        </div>
        <div className="space-y-3">
          {demoGroceryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex items-center justify-between p-3 rounded-lg bg-white border border-border ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${staggerDelays[index+1]}ms` }}
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.quantity}</p>
              </div>
              <p className="font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomeContent: React.FC<HomeContentProps> = ({ isRegistered }) => {
  return isRegistered ? <RegisteredContent /> : <UnregisteredContent />;
};

export default HomeContent;
