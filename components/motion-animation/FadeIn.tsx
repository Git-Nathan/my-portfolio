'use client';

import { motion, MotionProps } from 'motion/react';
import { ComponentPropsWithoutRef, ElementType } from 'react';

type FadeDirection = 'up' | 'down' | 'left' | 'right';

type FadeInProps<T extends ElementType = 'div'> = {
  as?: T;
  direction?: FadeDirection;
} & MotionProps &
  ComponentPropsWithoutRef<T>;

function getInitialValues(direction: FadeDirection) {
  switch (direction) {
    case 'down':
      return { opacity: 0, y: -40 };
    case 'left':
      return { opacity: 0, x: 40 };
    case 'right':
      return { opacity: 0, x: -40 };
    case 'up':
    default:
      return { opacity: 0, y: 40 };
  }
}

export function FadeIn<T extends ElementType = 'div'>({
  as,
  children,
  direction = 'up',
  ...rest
}: FadeInProps<T>) {
  const MotionComponent = motion(as || 'div') as ElementType;
  const initial = getInitialValues(direction);

  return (
    <MotionComponent
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ amount: 0.2, once: true }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
