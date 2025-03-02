
import { useEffect, useState } from 'react';

// Animation types
export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'none';
export type AnimationType = 'fade' | 'slide' | 'scale' | 'none';

// Animation props
export interface AnimationProps {
  children: React.ReactNode;
  type?: AnimationType;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
}

// Utility for staggered animations
export const useStaggeredAnimation = (
  itemCount: number,
  baseDelay: number = 50,
  staggerAmount: number = 50
) => {
  return Array.from({ length: itemCount }).map(
    (_, index) => baseDelay + index * staggerAmount
  );
};

// Hook for element visibility (for animations)
export const useElementOnScreen = (
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible] as const;
};

// Hook for page transition
export const usePageTransition = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return isPageLoading;
};

// Animation class generator
export const getAnimationClasses = (
  type: AnimationType = 'fade',
  direction: AnimationDirection = 'none',
  delay: number = 0
): string => {
  let classes = '';

  // Base animation type
  switch (type) {
    case 'fade':
      classes = 'animate-fade-in opacity-0';
      break;
    case 'scale':
      classes = 'animate-scale-in opacity-0 scale-95';
      break;
    case 'slide':
      if (direction === 'right') {
        classes = 'animate-slide-in-right translate-x-full';
      } else if (direction === 'left') {
        classes = 'animate-slide-in-left -translate-x-full';
      } else if (direction === 'up') {
        classes = 'animate-slide-in-up translate-y-full';
      } else if (direction === 'down') {
        classes = 'animate-slide-in-down -translate-y-full';
      }
      break;
    default:
      return '';
  }

  // Add delay if specified
  if (delay > 0) {
    classes += ` animation-delay-${delay}`;
  }

  return classes;
};
