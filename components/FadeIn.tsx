import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
  blur?: boolean; // Novo suporte a Blur
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '', 
  direction = 'up',
  blur = true 
}) => {
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
    }, { threshold: 0.1, rootMargin: "50px" }); // Margin para iniciar antes

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  let transformStyle = '';
  if (!isVisible) {
    if (direction === 'up') transformStyle = 'translate3d(0, 30px, 0)';
    if (direction === 'left') transformStyle = 'translate3d(-30px, 0, 0)';
    if (direction === 'right') transformStyle = 'translate3d(30px, 0, 0)';
  } else {
    transformStyle = 'translate3d(0, 0, 0)';
  }

  // Luxury Logic: Blur transition
  const filterStyle = blur ? (isVisible ? 'blur(0)' : 'blur(8px)') : 'none';

  return (
    <div
      ref={domRef}
      className={`${className} will-change-[opacity,transform,filter]`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: transformStyle,
        filter: filterStyle,
        transition: `opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), filter 1.2s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;