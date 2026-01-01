import type { SVGProps } from 'react';
import { shapePaths } from '@/utils/shapePaths';
import { cn } from '@/utils/cn';

export interface IShapeProps extends SVGProps<SVGSVGElement> {
  path?: string;
  color?: string;
  spinDuration?: number;
  spinDirection?: 'normal' | 'reverse';
}

export function Shape({
  path = shapePaths[0],
  className,
  style,
  spinDuration,
  spinDirection = 'normal',
  ...restProps
}: Readonly<IShapeProps>) {
  return (
    <svg
      width={380}
      height={380}
      viewBox='0 0 380 380'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('fill-purple min absolute min-h-50 min-w-50', className)}
      style={{
        ...(spinDuration
          ? {
              animationName: 'spin',
              animationDuration: `${spinDuration}s`,
              animationTimingFunction: 'linear',
              animationDelay: '0s',
              animationIterationCount: 'infinite',
              animationDirection: spinDirection,
            }
          : {}),
        ...style,
      }}
      {...restProps}
    >
      <path d={path} />
    </svg>
  );
}
