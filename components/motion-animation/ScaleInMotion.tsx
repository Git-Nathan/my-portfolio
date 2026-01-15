'use client';

import { motion, MotionProps } from 'motion/react';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

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

  return (
    <MotionComponent
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration,
        delay,
        scale: {
          type: 'spring',
          duration,
          bounce: 0.5,
        },
      }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
