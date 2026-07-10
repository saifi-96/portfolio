import React, { useEffect, useRef, useState } from 'react';

export const AnimatedCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Check if device is touch-based or has fine pointer (desktop mouse)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    setHidden(false);
    document.body.classList.add('custom-cursor-active');

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const render = () => {
      // Linear interpolation for outer ring trailing effect
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      requestAnimationFrame(render);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null || 
        target.closest('.interactive-clickable') !== null ||
        target.getAttribute('role') === 'button';
      
      setHovered(isClickable);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`custom-cursor pointer-events-none fixed z-[9999] rounded-full transition-transform duration-200 -translate-x-1/2 -translate-y-1/2 ${
          hovered ? 'scale-150 bg-accent-cyan' : 'bg-accent-purple'
        }`}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring pointer-events-none fixed z-[9998] rounded-full transition-transform duration-300 -translate-x-1/2 -translate-y-1/2 ${
          hovered ? 'scale-150 bg-accent-purple/10 border-accent-cyan' : 'border-accent-purple/40'
        }`}
      />
    </>
  );
};
