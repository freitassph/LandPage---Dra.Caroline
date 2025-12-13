import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  let transformStyle = '';
  if (!isVisible) {
    if (direction === 'up') transformStyle = 'translateY(20px)';
    if (direction === 'left') transformStyle = 'translateX(-20px)';
    if (direction === 'right') transformStyle = 'translateX(20px)';
  } else {
    transformStyle = 'translate(0)';
  }

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: transformStyle,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;