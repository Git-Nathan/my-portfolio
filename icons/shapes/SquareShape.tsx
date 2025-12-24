import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export function SquareShape(props: Readonly<HTMLAttributes<HTMLDivElement>>) {
  const { className, ...restProps } = props;

  return (
    <div
      className={cn('absolute size-6 rounded-[20%] bg-blue-500 opacity-40', className)}
      {...restProps}
    />
  );
}
