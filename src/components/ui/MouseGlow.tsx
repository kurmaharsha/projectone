import React, { useEffect, useState } from 'react';

export const MouseGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, .glass-card')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Primary Ambient Gradient Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(${isHovered ? '700px' : '500px'} circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.12), rgba(6, 182, 212, 0.06) 40%, transparent 80%)`,
        }}
      />

      {/* Small Glowing Cursor Follower Orb */}
      <div
        className="pointer-events-none fixed z-40 w-8 h-8 rounded-full border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-xs transition-transform duration-75 ease-out hidden md:block"
        style={{
          left: `${position.x - 16}px`,
          top: `${position.y - 16}px`,
          transform: isHovered ? 'scale(1.6)' : 'scale(1)',
          boxShadow: isHovered ? '0 0 20px rgba(6, 182, 212, 0.5)' : 'none',
        }}
      />
    </>
  );
};
