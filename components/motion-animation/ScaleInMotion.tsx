'use client';

import { motion, MotionProps, useAnimate } from 'motion/react';
import { ComponentPropsWithoutRef, ElementType, ReactNode, useEffect } from 'react';

type ScaleInMotionProps<T extends ElementType = 'div'> = {
  as?: T;
  delay?: number;
  duration?: number;
  children: ReactNode;
} & MotionProps &
  ComponentPropsWithoutRef<T>;

export function ScaleInMotion<T extends ElementType = 'div'>({
  as,
  delay = 0,
  duration = 0.5,
  children,
  ...rest
}: ScaleInMotionProps<T>) {
  const MotionComponent = motion(as || 'div') as ElementType;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      animate(
        scope.current,
        { opacity: 1, scale: 1 },
        {
          duration,
          scale: {
            type: 'spring',
            duration,
            bounce: 0.5,
          },
        },
      );
    }, delay * 1000);

    return () => clearTimeout(animationTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MotionComponent ref={scope} initial={{ opacity: 0, scale: 0 }} {...rest}>
      {children}
    </MotionComponent>
  );
}
