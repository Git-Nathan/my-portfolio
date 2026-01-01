import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

type FloatingShapeProps = HTMLAttributes<HTMLDivElement> & {
  delay?: string;
  reverseRotation?: boolean;
};

export const FloatingShape = ({
  delay = '0s',
  children,
  className,
  reverseRotation,
  ...restProps
}: FloatingShapeProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none',
        reverseRotation ? 'animate-diagonal-float-reverse' : 'animate-diagonal-float',
        className,
      )}
      style={{
        animationDelay: delay,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
