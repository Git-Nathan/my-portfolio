import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export function CircleShape(props: Readonly<HTMLAttributes<HTMLDivElement>>) {
  const { className, ...restProps } = props;

  return (
    <div
      className={cn('absolute size-6 rounded-full bg-blue-500 opacity-40', className)}
      {...restProps}
    />
  );
}
