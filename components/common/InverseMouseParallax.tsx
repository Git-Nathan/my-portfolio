'use client';

import { cn } from '@/utils/cn';
import { HTMLAttributes, useEffect, useRef } from 'react';

type InverseMouseParallaxProps = HTMLAttributes<HTMLDivElement> & {
  strengthX?: number;
  strengthY?: number;
};

export const InverseMouseParallax = ({
  strengthX = 90,
  strengthY = 45,
  children,
  className,
  ...restProps
}: InverseMouseParallaxProps) => {
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!shapeRef.current) return;

      const { innerWidth, innerHeight } = globalThis;

      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;

      const moveX = -x * strengthX;
      const moveY = -y * strengthY;

      shapeRef.current.style.transform = `
        translate(${moveX}px, ${moveY}px)
      `;
    };

    globalThis.addEventListener('mousemove', handleMouseMove);
    return () => globalThis.removeEventListener('mousemove', handleMouseMove);
  }, [strengthX, strengthY]);

  return (
    <div
      className={cn('absolute', className)}
      ref={shapeRef}
      style={{
        transition: 'transform 0.15s ease-out',
        pointerEvents: 'none',
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
