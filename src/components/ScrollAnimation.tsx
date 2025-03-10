
import React, { useRef, useEffect, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-right' | 'fade-left' | 'scale-up';
  delay?: number;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            
            switch (animation) {
              case 'fade-up':
                entry.target.classList.remove('translate-y-10');
                break;
              case 'fade-right':
                entry.target.classList.remove('-translate-x-10');
                break;
              case 'fade-left':
                entry.target.classList.remove('translate-x-10');
                break;
              case 'scale-up':
                entry.target.classList.remove('scale-95');
                break;
            }
          }, delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay, threshold]);

  const getInitialClasses = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-10';
      case 'fade-right':
        return 'opacity-0 -translate-x-10';
      case 'fade-left':
        return 'opacity-0 translate-x-10';
      case 'scale-up':
        return 'opacity-0 scale-95';
      default:
        return 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${getInitialClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
