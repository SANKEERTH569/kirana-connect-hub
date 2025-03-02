
import React from 'react';
import { AnimationProps, getAnimationClasses } from '@/utils/animation';

const PageTransition: React.FC<AnimationProps> = ({
  children,
  type = 'fade',
  direction = 'none',
  delay = 0,
  duration = 300,
  className = '',
}) => {
  const animationClasses = getAnimationClasses(type, direction, delay);
  const style = { animationDuration: `${duration}ms` };

  return (
    <div className={`${animationClasses} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default PageTransition;
