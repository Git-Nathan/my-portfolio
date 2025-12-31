import type { SVGProps } from 'react';
import { shapePaths } from '@/utils/shapePaths';
import { cn } from '@/utils/cn';
import { getRandomSpinClass } from '@/utils/spinAnimation';

export interface IShapeProps extends SVGProps<SVGSVGElement> {
  path?: string;
  color?: string;
}

export function Shape({ path = shapePaths[0], className, ...restProps }: Readonly<IShapeProps>) {
  return (
    <svg
      width={380}
      height={380}
      viewBox='0 0 380 380'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('fill-purple absolute', getRandomSpinClass(), className)}
      {...restProps}
    >
      <path d={path} />
    </svg>
  );
}
