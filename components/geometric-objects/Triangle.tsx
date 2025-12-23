import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export interface TriangleProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: number;
}

export function Triangle(props: Readonly<TriangleProps>) {
  const { className, style, color = '#f87171', size = 128, ...restProps } = props;

  const halfBase = size / 2;
  const height = (Math.sqrt(3) / 2) * size;

  return (
    <div
      className={cn('absolute -z-1 h-0 w-0 opacity-50', className)}
      style={{
        borderLeft: `${halfBase}px solid transparent`,
        borderRight: `${halfBase}px solid transparent`,
        borderBottom: `${height}px solid ${color}`,
        ...style,
      }}
      {...restProps}
    />
  );
}
